import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ContactJsonPlaceholder } from 'src/app/interfaces/contact.interface';
import { ContactService } from 'src/app/services/contact.service.service';
import { HeaderAgendaComponent } from '../../components/header-agenda/header-agenda.component';
import { NewContactComponent } from '../new-contact/new-contact.component';



//import { contactsData } from 'src/assets/mockData/data';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contactsData:ContactJsonPlaceholder[] = [];//lista con la cual itera el ngfor en el html

  constructor(private cs:ContactService, private router:Router) { }  //private Ha: HeaderAgendaComponent

  idContactoForEdit: number = 0 //este dato llega desde la contact card y es utilizado por el edit contact component

  abrirContactEdit: number = 0 //0 contact card,1 editar contacto, 2 crear agenda

  agendaMostrada: number = -1 //id de la agenda mostrada, si es -1 muestra el titulo "seleccionar agenda"


  ngOnInit(): void {
  }


  async getData(agendaId : number): Promise<void>{
    this.contactsData = await this.cs.getContacts(agendaId); //rellena ContactData con todos los contactos de una agenda
  }

  async deleteContacto(contactoId : number): Promise<void>{ //se ejecuta desde la contact card
    await this.cs.deleteContact(contactoId);
  }

  reload(){
    this.getData(this.agendaMostrada)
  }


}
