// export interface Contact {
//     id: number;
//     first_name: string;
//     last_name: string;
//     email: string;
//     gender: string;
//     ip_address: string;
// }

import { Expression } from "@angular/compiler"
import { last } from "rxjs"


export interface Contact {
  firstName: string,
  lastName: string,
  phoneNumber: string,
  email: string,
  descripcion: string,
  avatar: string
}

export const defaultContact:Contact = {
  firstName: "Charles",
  lastName: "Meyer",
  phoneNumber: "646.995.2215x5795",
  email: "simonsdavid@flowers.biz",
  descripcion: "Work Mate",
  avatar: "https://mmoapi.com/static/images/avatar/men/57.jpg",
}

export const Eric:Contact = {
  firstName: "Eric",
  lastName: "Young",
  phoneNumber: "962.134.2344x8959",
  email: "perezfernando@miller.com",
  descripcion: "Family",
  avatar: "https://mmoapi.com/static/images/avatar/men/23.jpg",
}

export const Catherine:Contact = {
  firstName: "Catherine",
  lastName: "Barry",
  phoneNumber: "864-920-3744",
  email: "garyriley@nelson-orr.com",
  descripcion: "Friend",
  avatar: "https://mmoapi.com/static/images/avatar/women/67.jpg"
}

export const Candice:Contact = {
  firstName: "Candice",
  lastName: "Wilson",
  phoneNumber: "1-953-394-2490x75771",
  email: "fjones@lee.net",
  descripcion: "Friend",
  avatar:"https://mmoapi.com/static/images/avatar/women/56.jpg"
}

export const Richard:Contact ={
  firstName: "Richard",
  lastName: "Flores",
  phoneNumber: "(969)640-1486x9089",
  email: "josejackson@yahoo.com",
  descripcion: "Friend",
  avatar:"https://mmoapi.com/static/images/avatar/men/84.jpg",
}
export const Christopher:Contact ={
  firstName: "Christopher",
  lastName: "Johnson",
  phoneNumber: "(875)637-8673x533",
  email: "kingdevin@costa.com",
  descripcion: "Work Mate",
  avatar:"https://mmoapi.com/static/images/avatar/men/86.jpg",
}
export const Andrea:Contact ={
  firstName: "Andrea",
  lastName: "Moore",
  phoneNumber: "409-340-0165",
  email: "paulreyes@gmail.com",
  descripcion: "Friend",
  avatar:"https://mmoapi.com/static/images/avatar/women/17.jpg"
}

export const Nancy:Contact ={
  firstName: "Nancy",
  lastName: "Stokes",
  phoneNumber: "093-036-0196",
  email: "schavez@kim.org",
  descripcion: "Friend",
  avatar:"https://mmoapi.com/static/images/avatar/women/21.jpg"
}

export const Brian:Contact ={
  firstName: "Brian",
  lastName: "Torres",
  phoneNumber: "1-227-905-2142",
  email: "cassidytran@cole.com",
  descripcion: "Friend",
  avatar:"https://mmoapi.com/static/images/avatar/men/52.jpg"
}
