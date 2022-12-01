import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ContactJsonPlaceholder } from 'src/app/interfaces/contact.interface';
import { ContactsComponent } from '../../pages/contacts/contacts.component';
import { NewContactComponent } from '../../pages/new-contact/new-contact.component';
//import { Contact, defaultContact, Eric, Catherine } from 'src/app/interfaces/contactData';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {

  constructor(private cc:ContactsComponent, private router:Router) { }



  @Input() contact:ContactJsonPlaceholder = {
    id: 0,
    nombre: '',
    apellido: '',
    mail: '',
    telefono: '',
    direccion: '',
    agendaId: 0,
  };

  ngOnInit(): void {
  }


  deleteContacto(id:number){
    console.log("contacto id: ",id," eliminado")
    this.cc.deleteContacto(id)
    //window.location.reload();//recarga la pagina automaticamente
  }

  editContacto(id:number){
    console.log("contacto id: ",id," edit")
    this.cc.idContactoForEdit = id
    this.cc.abrirContactEdit = true
    //this.router.navigate(['/']);
  }

}

