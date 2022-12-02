import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactJsonPlaceholder } from 'src/app/interfaces/contact.interface';
import { ContactService } from 'src/app/services/contact.service.service';
import { ContactsComponent } from '../../pages/contacts/contacts.component';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {

  contactForeditData:ContactJsonPlaceholder = {
    id: 1,
    nombre: '',
    apellido: '',
    mail: '',
    telefono: '',
    direccion: '',
    agendaId: 0
  };


  constructor(private cs : ContactService, private router:Router ,private cc:ContactsComponent) { }

  idContactoForEdit: number = this.cc.idContactoForEdit //toma el valor de idContactoForEdit del contact component

  ngOnInit(): void {
    this.contactForEditData(this.idContactoForEdit)//al iniciar se ejecuta el metodo contactForEditData con el valor del idContactoForEdit
  }


  async getContacto(id:number){  //recibe el id de un contacto
    const contacto = this.cs.getContactDetails(id); //trae un objeto contacto con todos sus datos
    return await contacto
  }


  async contactForEditData(id: number){
    const contactForEdit = this.getContacto(id)  //ejecuta getContacto() con el id del contacto que va a ser editado

    this.contactForeditData.id = (await contactForEdit).id;           //reemplaza todos los valores del contactForeditData con los del contacto buscado
    this.contactForeditData.nombre = (await contactForEdit).nombre,   //para que cuando se abra el form aparezcan todos los datos actuales del contacto
    this.contactForeditData.apellido = (await contactForEdit).apellido,
    this.contactForeditData.mail = (await contactForEdit).mail,
    this.contactForeditData.telefono = (await contactForEdit).telefono,
    this.contactForeditData.direccion = (await contactForEdit).direccion,
    this.contactForeditData.agendaId = (await contactForEdit).agendaId
  }


  async editcontact(id:number, form:NgForm){ // toma  el id y los datos editados del contacto desde el form
    console.log(form.value);

    const contactEdit:ContactJsonPlaceholder = { //crea un objeto contacto y remplaza sus valores con los del contactForeditData
      id: this.contactForeditData.id,            // contactForeditData es el contacto que es editado en el form
      nombre: this.contactForeditData.nombre,
      apellido: this.contactForeditData.apellido,
      mail: this.contactForeditData.mail,
      telefono: this.contactForeditData.telefono,
      direccion: this.contactForeditData.direccion,
      agendaId: 0
      };

      const contactoeditado = this.cs.editContact(id, contactEdit); //ejecuta el metodo editContact del contact service

      console.log("el contacto '",(await contactoeditado).nombre,"' id:",(await contactoeditado).id, "fue editado correctamente"); //hace un console.log con los valores devueltos
  }


  editContactFull(id:number, form:NgForm){ //metodo llamado desde el submit del form
    //this.contactForEditData(this.idContactoForEdit)
    this.editcontact(id, form)
    this.cc.abrirContactEdit = 0 //cambia abrirContactEdit del contact componet a 0 para que se cierre el form y se abran las contact card
    setTimeout(()=>{
      this.cc.reload();
    },50);//recarga la ultima agenda, con un retraso de 50mls para asegurarnos q los metodos anteriores hayan terminado

  }
}
