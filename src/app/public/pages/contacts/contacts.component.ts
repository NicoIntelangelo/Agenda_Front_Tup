import { Component, OnInit } from '@angular/core';
import { contactsData } from 'src/assets/mockData/data';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contactsData = contactsData;

  constructor() { }

  ngOnInit(): void {
  }

}
