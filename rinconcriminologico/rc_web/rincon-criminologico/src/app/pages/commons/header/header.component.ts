import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() isPhone = false;
  @Input() isExternal = false;
  @Input() isInternal = false;

  constructor() { }

  ngOnInit(): void {
  }

  goToHome() {
    if (this.isExternal) {
      // Ir al inicio portal externo
    }

    if (this.isInternal) {
      // Ir al inicio portal interno si está logado el usuario.
    }
  }

  initLogIn() {
    console.log('Ir a la pantalla de Iniciar Sesión');
  }

}
