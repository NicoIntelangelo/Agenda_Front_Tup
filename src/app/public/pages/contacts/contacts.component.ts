import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactJsonPlaceholder } from 'src/app/interfaces/contact.interface';
import { ContactService } from 'src/app/services/contact.service.service';
//import { contactsData } from 'src/assets/mockData/data';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contactsData:ContactJsonPlaceholder[] = [];

  constructor(private cs:ContactService, private router:Router) { }

  ngOnInit(): void {
    this.getData(10)
  }

  async getData(agendaId : number){
    this.contactsData = await this.cs.getContacts(agendaId);
  }


}
