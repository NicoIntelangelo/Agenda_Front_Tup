import { Injectable } from '@angular/core';
import { BACKEND_URL } from '../constants/backends';
import { AgendaJsonPlaceholder } from '../interfaces/agenda.interface';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  constructor(private auth:AuthService) { }

  // async getAgendas(userId: string): Promise<AgendaJsonPlaceholder[]> {
  //   const data = await fetch(BACKEND_URL+'/api/Agenda/getAgendas/'+ userId);
  //   return await data.json();
  // }

  async getAgendas(userId: string): Promise<AgendaJsonPlaceholder[]> {
    const data = await fetch(BACKEND_URL+'/api/Agenda/getAgendas/'+ userId,{
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Authorization' :  `Bearer ${this.auth.getSession().token!}`
      },
    });
    return await data.json();
  }
}
