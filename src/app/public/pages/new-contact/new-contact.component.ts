import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { ContactJsonPlaceholder } from 'src/app/interfaces/contact.interface';
import { ContactService } from 'src/app/services/contact.service.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactCardComponent } from '../../components/contact-card/contact-card.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss']
})
export class NewContactComponent implements OnInit {

  edit_new:boolean = false //true/false //para cambiar entre edicion y creacion de contacto

  contactData:ContactJsonPlaceholder = {
    id: 1,
    nombre: '',
    apellido: '',
    mail: '',
    telefono: '',
    direccion: '',
    agendaId: 0
  };

  contactForeditData:ContactJsonPlaceholder = {
    id: 1,
    nombre: '',
    apellido: '',
    mail: '',
    telefono: '',
    direccion: '',
    agendaId: 0
  };


  constructor(private cs : ContactService, private router:Router) { }  //private Cc: ContactCardComponent


  ngOnInit(): void {
    this.contactForEditData(17)//esta fun carga los datos del usuario a editar
    //this.edit_new = true /// para q por default se añadir un contacto
  }


  async newcontact(form:NgForm){ /***************** */
  console.log(form.value);
  const contactocreado = this.cs.addContact(form.value);
  if(contactocreado == null){
    console.log("error")
  }
  else{
    console.log("el contacto ",(await contactocreado).nombre," fue creado con el id: ",(await contactocreado).id);
    this.router.navigate(['/contacts']); //cuando iniciamos secion nos lleva a contactos if(await contactocreado)
  }
  }

  async getContacto(id:number){
    const contacto = this.cs.getContactDetails(id);
    return await contacto
}

  async editcontact(id:number, form:NgForm){ /***************** */
    console.log(form.value);
    //const id = 17//this.Cc.idEdicion//id del contacto a editar

    const contactEdit:ContactJsonPlaceholder = {
      id: this.contactForeditData.id,
      nombre: this.contactForeditData.nombre,
      apellido: this.contactForeditData.apellido,
      mail: this.contactForeditData.mail,
      telefono: this.contactForeditData.telefono,
      direccion: this.contactForeditData.direccion,
      agendaId: 0
      };

      const contactoeditado = this.cs.editContact(id, contactEdit);

      console.log("el contacto '",(await contactoeditado).nombre,"' id:",(await contactoeditado).id, "fue editado correctamente");
      this.router.navigate(['/contacts']); //cuando iniciamos secion nos lleva a contactos if(await contactocreado)

    }


  async contactForEditData(id: number){
    const contactForEditData = this.getContacto(id)//tiene q recibir el id a editar

    this.contactForeditData.id = (await contactForEditData).id;
    this.contactForeditData.nombre = (await contactForEditData).nombre,
    this.contactForeditData.apellido = (await contactForEditData).apellido,
    this.contactForeditData.mail = (await contactForEditData).mail,
    this.contactForeditData.telefono = (await contactForEditData).telefono,
    this.contactForeditData.direccion = (await contactForEditData).direccion,
    this.contactForeditData.agendaId = (await contactForEditData).agendaId
  }

  // editContactFull(id:number, form:NgForm){
  //   this.contactForEditData(this.idContactoForEdit)
  //   this.editcontact(id, form)
  // }
}
