import { Component, OnInit, Input } from '@angular/core';
import { ContactJsonPlaceholder } from 'src/app/interfaces/contact.interface';
import { ContactsComponent } from '../../pages/contacts/contacts.component';
//import { Contact, defaultContact, Eric, Catherine } from 'src/app/interfaces/contactData';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {

  constructor(private cs:ContactsComponent) { }

  @Input() contact:ContactJsonPlaceholder = {
    id: 0,
    nombre: '',
    apellido: '',
    mail: '',
    telefono: '',
    direccion: '',
    agendaId: 0,
  };

  deleteContacto(id:number){
    console.log("contacto id: ",id," eliminado")
    this.cs.deleteContacto(id)
  }

  ngOnInit(): void {
  }
}

