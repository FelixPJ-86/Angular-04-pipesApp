import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interface/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroes: Heroe[], orderPor:string='sin valor'): Heroe[] {

    if(orderPor==='nombre'){
      return heroes.sort((a,b)=>(a.nombre>b.nombre)?1:-1);
    }

    if(orderPor==='vuela'){
      return heroes.sort((a,b)=>(a.vuela>b.vuela)?1:-1);
    }

    if(orderPor==='color'){
      return heroes.sort((a,b)=>(a.color>b.color)?1:-1);
    }

    return heroes;
  }

}
