import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'mayusculas' })
export class MayusculasPipe implements PipeTransform {


    transform(termino: string, enMasucula: boolean = true): string {
        return enMasucula ? termino.toUpperCase() : termino.toLowerCase();
    }



}