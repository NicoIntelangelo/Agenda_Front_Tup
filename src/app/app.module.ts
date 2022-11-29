import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './public/components/header/header.component';
import { NewContactComponent } from './public/pages/new-contact/new-contact.component';
import { ContactCardComponent } from './public/components/contact-card/contact-card.component';
import { HeaderAgendaComponent } from './public/components/header-agenda/header-agenda.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    //NewContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

