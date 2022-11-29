import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { contactsRoutingModule } from './home-routing.module';
import { ContactCardComponent } from '../../components/contact-card/contact-card.component';
import { HeaderAgendaComponent } from '../../components/header-agenda/header-agenda.component';



@NgModule({
  declarations: [
    ContactsComponent,
    ContactCardComponent,
    HeaderAgendaComponent
  ],
  imports: [
    CommonModule,
    contactsRoutingModule
  ],
  exports:[
    HeaderAgendaComponent
  ]
})
export class ContactsModule { }
