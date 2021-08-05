import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  ajustes: Ajustes = {
  temaurl: 'assets/css/colors/default.css',
  tema: 'default'
  };

  constructor( @Inject(DOCUMENT) private _document: Document ) {
    this.cargarAjustes();
  }

  guardarAjustes() {
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }

  cargarAjustes() {
    if (localStorage.getItem('ajustes')) {
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
    } 
    this.aplicarTema(this.ajustes.tema);
  }

  aplicarTema(tema:string) {
    let url = `assets/css/colors/${tema}.css`;
    this._document.getElementById('theme').setAttribute('href', url );
    this.ajustes.tema = tema;
    this.ajustes.temaurl = url;
    this.guardarAjustes();
  }
}

interface Ajustes {
  temaurl:string;
  tema:string;
}
