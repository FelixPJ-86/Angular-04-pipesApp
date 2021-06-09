import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

nombreLower:string='félix';
nombreUpper:string='FÉLIX';
nombreCompleto:string='fÉlIx pOteNte';

fecha:Date =new Date();

}
