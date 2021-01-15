import { Component } from '@angular/core';
import { Persona } from '../../class/persona';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  p = new Persona(19, "Masculino", "Jair", "Alejandro")
}
