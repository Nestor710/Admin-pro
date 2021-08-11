import { DOCUMENT } from '@angular/common';
import { Injectable, Inject } from '@angular/core';

const progress1 = 'progress1';

const valores: Valores = {
  valor1: '',
  valor2: ''
}
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor( @Inject(DOCUMENT) private _document: Document) { this.cargarCambios() }
  
  
  cargarCambios() {
  const currents = JSON.parse(localStorage.getItem(valores.valor1));
  if (!currents) {
    localStorage.setItem(progress1, JSON.stringify([valores.valor1]));
  }
  }

}

interface Valores {
  valor1:any,
  valor2:any
}
