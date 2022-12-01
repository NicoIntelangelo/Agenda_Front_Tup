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

  idContactoForEdit: number = this.cc.idContactoForEdit

  ngOnInit(): void {
    this.contactForEditData(this.idContactoForEdit)
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
      this.cc.abrirContactEdit = false
      //this.router.navigate(['/contacts']); //cuando iniciamos secion nos lleva a contactos if(await contactocreado)

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

  editContactFull(id:number, form:NgForm){
    this.contactForEditData(this.idContactoForEdit)
    this.editcontact(id, form)
    //window.location.reload();
  }
}
