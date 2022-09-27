import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { contactsRoutingModule } from './home-routing.module';
import { ContactCardComponent } from '../../components/contact-card/contact-card.component';



@NgModule({
  declarations: [
    ContactsComponent,
    ContactCardComponent
  ],
  imports: [
    CommonModule,
    contactsRoutingModule
  ]
})
export class ContactsModule { }
