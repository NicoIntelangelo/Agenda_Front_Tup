import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { iAuthRequest, iRegisterRequest } from 'src/app/interfaces/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.scss']
})
export class RegistrarseComponent {

  constructor(private auth:AuthService, private router:Router) { }

  //Hecho usando NgModel
  registerData:iRegisterRequest = {
    nombre: '',
    email: '',
    password: '',
    telefono: ''
  };


  async registrarme(form:NgForm){

    console.log(form.value);
    const user = await this.auth.addUser(form.value);
    if(user) this.router.navigate(['/inicio-sesion']); //cuando iniciamos secion nos lleva a contactos
  }

}

