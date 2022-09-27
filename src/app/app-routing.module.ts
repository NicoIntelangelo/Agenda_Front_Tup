import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: ()=> import('./public/pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: "new-contact",
    loadChildren: ()=> import('./public/pages/new-contact/new-contact.module').then(m => m.NewContactModule)
  },
  {
    path: "inicio-sesion",
    loadChildren: ()=> import('./public/pages/inicio-sesion/inicio-sesion.module').then(m => m.InicioSesionModule)
  },
  {
    path: "contacts",
    loadChildren: ()=> import('./public/pages/contacts/contacts.module').then(m => m.ContactsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
