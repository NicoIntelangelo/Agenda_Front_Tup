import { Component, Input, OnInit } from '@angular/core';
import { AgendaJsonPlaceholder } from 'src/app/interfaces/agenda.interface';
import { AgendaService } from 'src/app/services/agenda.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header-agenda',
  templateUrl: './header-agenda.component.html',
  styleUrls: ['./header-agenda.component.scss']
})
export class HeaderAgendaComponent implements OnInit {


  agendas:AgendaJsonPlaceholder[] = [];

  agendaSeleccionada:string = "";


  constructor(private as:AgendaService, private auth:AuthService) { }

  @Input() agenda:AgendaJsonPlaceholder = {
    id: 0,
    nombre: '',
    codigo: ''
  };

  ngOnInit(): void {
    this.getDataAgendas();
    //this.getAgendaData()
  }


  async getDataAgendas(){
    const  agendaId = localStorage.getItem("Id") || 'invalid';
    if (agendaId !== 'invalid'){
      this.agendas = await this.as.getAgendas(agendaId);
    }
    else{
      console.log("error getDataAgendas AgendaComponent")
    }
  }

  // getAgendaData(){
  //   // const agenda = this.agendas.slice(0,1)
  //   // console.log('hola',agenda)
  //   const  agendaId = localStorage.getItem("Id") || 'invalid';
  //   const agendas = this.as.getAgendas(agendaId)
  //   console.log(agendas[0])
  // }


}
