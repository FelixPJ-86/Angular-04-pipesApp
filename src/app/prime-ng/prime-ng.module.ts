import { NgModule } from '@angular/core';

import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {FieldsetModule} from 'primeng/fieldset';
import {MenubarModule} from 'primeng/menubar';

@NgModule({
 exports:[
    CardModule,
    ButtonModule,
    MenubarModule,
    FieldsetModule]
})
export class PrimeNgModule { }
