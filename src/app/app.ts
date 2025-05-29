import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormioModule } from '@formio/angular';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormioModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'formio-modular-app';

  beneficios = [
    {
      titulo: 'Ahorro',
      icono: 'assets/ahorro-icon.svg',
      descripcion: 'Podrá construir un capital ahorrando, en un período mínimo de 12, 18, 24 y 36 meses.'
    },
    {
      titulo: 'Sorteos únicos',
      icono: 'assets/sorteo-icon.svg',
      descripcion: `Participe en sorteos mensuales por pagar puntualmente. <br><a href="#" class="text-green fw-bold">Conozca los ganadores</a>`
    },
    {
      titulo: 'Premios',
      icono: 'assets/premios-icon.svg',
      descripcion: 'Obtendrá premios en dinero equivalentes a múltiples de su cuota mensual.'
    },
    {
      titulo: 'Sorteos',
      icono: 'assets/calendario-icon.svg',
      descripcion: `<a href="#" class="text-green fw-bold">Conozca aquí</a> el calendario de sorteos`
    }
  ];

  formJson = {
    components: [
      {
        type: 'textfield',
        key: 'name',
        label: 'Nombre completo',
        input: true
      },
      {
        type: 'email',
        key: 'email',
        label: 'Correo electrónico',
        input: true
      },
      {
        type: 'button',
        action: 'submit',
        label: 'Enviar',
        theme: 'primary'
      }
    ]
  };
}
