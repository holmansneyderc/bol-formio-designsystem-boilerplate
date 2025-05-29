import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormioModule } from '@formio/angular';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormioModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'formio-modular-app';

  beneficios = [
    {
      titulo: 'Ahorro',
      icono: 'assets/logo.svg',
      descripcion: 'Podrá construir un capital ahorrando, en un período mínimo de 12, 18, 24 y 36 meses.'
    },
    {
      titulo: 'Sorteos únicos',
      icono: 'assets/logo.svg',
      descripcion: `Participe en sorteos mensuales por pagar puntualmente. <br><a href="#" class="text-green fw-bold">Conozca los ganadores</a>`
    },
    {
      titulo: 'Premios',
      icono: 'assets/logo.svg',
      descripcion: 'Obtendrá premios en dinero equivalentes a múltiples de su cuota mensual.'
    },
    {
      titulo: 'Sorteos',
      icono: 'assets/logo.svg',
      descripcion: `<a href="#" class="text-green fw-bold">Conozca aquí</a> el calendario de sorteos`
    }
  ];

  formJson = {
    components: [
      
    ]
  };
}
