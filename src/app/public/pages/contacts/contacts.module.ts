import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { contactsRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [
    ContactsComponent
  ],
  imports: [
    CommonModule,
    contactsRoutingModule
  ]
})
export class ContactsModule { }
