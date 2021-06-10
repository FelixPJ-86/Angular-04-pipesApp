import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

//i18nSelect
  nombre:string ='Félix';
 genero:string ='masculino';

  invitacionMapa={
    'masculino':'invitarlo',
    'femenino':'invitarla'
  }

  //i18nPlural
  clientes:string[]=['Félix','Maria', 'Lidia', 'Marco' , 'Sandra'];
  clientesMapa={
    '=0':'no tenemos ningún cliente esperando.',
    '=1':'tenemos un cliente esperando.',
    '=2':'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }

cambiarCliente(){
  this.nombre='Blanca';
  this.genero='femenino';
}

borrarCliente(){
this.clientes.pop();
}

//KeyValue pipe
persona={
  nombre:'Félix',
  edad:35,
  direccion:'Valladolid, España'
}

//jsonPipe
heroes=[
{
nombre:'Superman',
vuela:true
},{
nombre:'Robin',
vuela:false
},{
nombre:'Aquaman',
vuela:false
}
]


//Async Pipe
miObservable=interval(5000);

valorPromesa = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve('tenemos data de promesa');
  }, 3500);
  
});


}
