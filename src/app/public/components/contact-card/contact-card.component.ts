import { Component, OnInit, Input } from '@angular/core';
import { Contact, defaultContact, Eric, Catherine } from 'src/app/interfaces/contactData';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {

  @Input() contact:Contact = defaultContact

  constructor() { }

  ngOnInit(): void {
  }
}

