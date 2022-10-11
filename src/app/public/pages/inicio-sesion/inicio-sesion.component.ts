import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { iAuthRequest } from 'src/app/core/interfaces/auth';
import { AuthService } from 'src/app/core/services/auth.service';
@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss']
})
export class InicioSesionComponent implements OnInit {

  constructor() {
    @Component({
      selector: 'app-login',
      templateUrl: './login.component.html',
      styleUrls: ['./login.component.scss']
    })
    export class LoginComponent {
  
      constructor(private auth:AuthService, private router:Router) { }
    
      //Hecho usando NgModel
      authData:iAuthRequest = {
        userName : "",
        password : ""
      };
    async login(form:NgForm){
      //Valor del formulario para no usar NgModel
      console.log(form.value);
      const token = await this.auth.login(form.value);
      if(token) this.router.navigate(['']);
   }

  ngOnInit(): void {
  }
  

}
