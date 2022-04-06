import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  resultado = 0;

  somar(valor1: number, valor2: number) {
    this.resultado = valor1 + valor2;
  }

}
