import { Component, OnInit } from '@angular/core';
import { ContactJsonPlaceholder } from 'src/app/interfaces/contact.interface';
import { ContactService } from 'src/app/services/contact.service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss']
})
export class NewContactComponent implements OnInit {

  constructor(private cs : ContactService) { }

  contactData:ContactJsonPlaceholder = {
    id: 0,
    nombre: '',
    apellido: '',
    mail: '',
    telefono: '',
    direccion: '',
    agendaId: 0,
  };

  async newcontact(form:NgForm){
    console.log(form.value);
    this.cs.addContact(form.value)

    //if(token) this.router.navigate(['/contacts']); //cuando iniciamos secion nos lleva a contactos
  }

  ngOnInit(): void {
  }

}
