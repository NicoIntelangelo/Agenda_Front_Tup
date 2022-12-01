import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { AgendaJsonPlaceholder } from 'src/app/interfaces/agenda.interface';
import { AgendaService } from 'src/app/services/agenda.service';
import { AuthService } from 'src/app/services/auth.service';
import { ContactsComponent } from '../../pages/contacts/contacts.component';

@Component({
  selector: 'app-header-agenda',
  templateUrl: './header-agenda.component.html',
  styleUrls: ['./header-agenda.component.scss']
})
export class HeaderAgendaComponent implements OnInit {


  agendas:AgendaJsonPlaceholder[] = [];

  addAgendaId: number = 0;

  constructor(private as:AgendaService, private auth:AuthService, private Cc:ContactsComponent) { }

  @Input() agenda:AgendaJsonPlaceholder = {
    id: 0,
    nombre: '',
    codigo: ''
  };

  ngOnInit(): void {
    this.getDataAgendas();
  }


  async getDataAgendas(){
    const  userId = localStorage.getItem("Id") || 'invalid';
    if (userId !== 'invalid'){
      this.agendas = await this.as.getAgendas(userId);
    }
    else{
      console.log("error getDataAgendas AgendaComponent")
    }
  }


  addAgenda(agendaid:string){
    const  agendaId = this.as.addAgenda(agendaid)
    window.location.reload();//recarga la pagina automaticamente
    console.log(agendaId)
  }

  agendaSelec(agendaId: number){
    this.Cc.agendaMostrada = agendaId
    this.Cc.getData(agendaId)
  }



}
