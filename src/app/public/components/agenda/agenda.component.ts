import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AgendaJsonPlaceholder } from 'src/app/interfaces/agenda.interface';
import { AgendaService } from 'src/app/services/agenda.service';
import { ContactsComponent } from '../../pages/contacts/contacts.component';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {

  agendaData:AgendaJsonPlaceholder = {
    id: 0,
    nombre: '',
    codigo: 'code'
  }

  constructor(private as : AgendaService, private router:Router, private cc:ContactsComponent) { }

  ngOnInit(): void {
  }


  async newagenda(form:NgForm){ /***************** */
  console.log(form.value);

  const agendaData:AgendaJsonPlaceholder = {
    id: 0,
    nombre: this.agendaData.nombre,
    codigo: 'code'
  }

  const agendacreada = this.as.createAgenda(agendaData); //ejectua addContact del contact service con los valores del form
  console.log("La agenda fue creada con el id ",(await agendacreada));
  this.cc.abrirContactEdit = 0//para q vuelva a mostrar las contact card
  window.location.reload();
  }


}
