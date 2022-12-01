import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewContactRoutingModule } from './new-contact-routing.module';
import { FormsModule } from '@angular/forms';
import { NewContactComponent } from './new-contact.component';


@NgModule({
  declarations: [
    NewContactComponent
  ],
  imports: [
    CommonModule,
    NewContactRoutingModule,
    FormsModule
  ],
  exports: [
  ]
})
export class NewContactModule { }
