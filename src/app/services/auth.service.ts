import { Injectable } from '@angular/core';
import { BACKEND_URL } from '../constants/backends';
import { iAuthRequest } from '../interfaces/auth';
import { ISession } from '../interfaces/session.interface';

import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  private loggedIn: boolean = false;

  async login(authentication:iAuthRequest): Promise<boolean> {
    const res = await fetch(BACKEND_URL + '/api/authentication/authenticate', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(authentication),
    });
    if(!res.ok) return false
    const token = await res.text();
    console.log(token)

    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
    const sub = decodedToken.sub;
    console.log(sub); ///busca el id del usuario

    if (!token) return false;
    this.setSession(token);
    this.setUserId(sub); //guarda el id en el local storage
    return true;
  }

  isLoggedIn(){
    return this.loggedIn;
  }


  getSession(): ISession {
    const item: string = localStorage.getItem('session') || 'invalid';
    if (item !== 'invalid') {
      return JSON.parse(item);
    }
    return { expiresIn: '', token: '' };
  }


  setUserId(id : string){//**************
    localStorage.setItem('Id', id);
  }

  setSession(token: any, expiresTimeHours: number = 24) {
    const date = new Date();
    date.setHours(date.getHours() + expiresTimeHours);

    const session: ISession = {
      expiresIn: new Date(date).toISOString(),
      token,
    };

    localStorage.setItem('session', JSON.stringify(session));
    //window.location.reload();
  }

  async getMe() {
    const res = await fetch('', {
      headers: {
        Authorization: this.getSession().token!,
      },
    });
    return await res.json();
  }

  resetSession() {
    localStorage.removeItem('session');
    this.loggedIn = false;
    window.location.reload();
  }


}


