import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { iAuthRequest, IRegistroInterface } from 'src/app/interfaces/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.scss']
})
export class RegistrarseComponent {

  constructor(private auth:AuthService, private router:Router) { }

  //Hecho usando NgModel
  authData:IRegistroInterface = {
    name : "",
    telefono : "",
    email : "",
    password : ""
  };


  async login(form:NgForm){
    //Valor del formulario para no usar NgModel
    console.log(form.value);
    const token = await this.auth.login(form.value);
    if(token) this.router.navigate(['/contacts']); //cuando iniciamos secion nos lleva a contactos
  }

}

