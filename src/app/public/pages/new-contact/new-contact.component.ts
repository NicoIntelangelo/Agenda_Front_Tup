import { Component, OnInit } from '@angular/core';
import { ContactJsonPlaceholder } from 'src/app/interfaces/contact.interface';
import { ContactService } from 'src/app/services/contact.service.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss']
})
export class NewContactComponent implements OnInit {

  constructor(private cs : ContactService, private router:Router) { }

  contactData:ContactJsonPlaceholder = {
    id: 1,
    nombre: '',
    apellido: '',
    mail: '',
    telefono: '',
    direccion: '',
    agendaId: 0
  };

  async newcontact(form:NgForm){ /***************** */
    console.log(form.value);
    const contactocreado = this.cs.addContact(form.value);
    if(contactocreado == null){
      console.log("error")
    }
    else{
      console.log("el contacto ",(await contactocreado).nombre," fue creado con el id: ",(await contactocreado).id);
       this.router.navigate(['/contacts']); //cuando iniciamos secion nos lleva a contactos if(await contactocreado)
    }
  }

  ngOnInit(): void {
  }

}
