import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-acount-settings',
  templateUrl: './acount-settings.component.html',
  styleUrls: ['./acount-settings.component.css']
})
export class AcountSettingsComponent implements OnInit {

  constructor( @Inject(DOCUMENT) private _document: Document,
                public _ajustes:SettingsService ) { }

  ngOnInit(): void {
    this.colocarCheck();
  }

  cambiarColor(theme:string, link:any) {
      this.aplicarCheck(link);
      this._ajustes.aplicarTema( theme );
      let url = `assets/css/colors/${theme}.css`;
      this._document.getElementById('theme').setAttribute('href', url );

      this._ajustes.ajustes.tema = theme;
      this._ajustes.ajustes.temaurl = url;

      this._ajustes.guardarAjustes();
  }

  aplicarCheck( link:any ) {
      let selectores:any = document.getElementsByClassName('selector');
      for(let ref of selectores){
          ref.classList.remove('working');
      }
      link.classList.add('working');
  }

  colocarCheck() {
    let selectores:any = document.getElementsByClassName('selector');
    let tema = this._ajustes.ajustes.tema;

      for(let ref of selectores){
          if (ref.getAttribute('data-theme') === tema) {
            ref.classList.add('working');
            break;
          }
      }

  }

}
