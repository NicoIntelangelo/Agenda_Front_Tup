import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoServiceService {

  constructor() { }
  async ObtenerContacto(){
    const res = await fetch('');
    const json = await res.json();
    console.log(json);
    return res;
  }
}
