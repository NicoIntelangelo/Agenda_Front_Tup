import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-agenda',
  templateUrl: './header-agenda.component.html',
  styleUrls: ['./header-agenda.component.scss']
})
export class HeaderAgendaComponent implements OnInit {

  agenda:string[]=["Agenda 1","Agenda 2","Agenda 3","Agenda 4"];

  agendaSeleccionada:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
