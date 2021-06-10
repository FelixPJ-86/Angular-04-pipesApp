import { NgModule } from '@angular/core';

import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {FieldsetModule} from 'primeng/fieldset';
import {MenubarModule} from 'primeng/menubar';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';

@NgModule({
 exports:[
    CardModule,
    ButtonModule,
    MenubarModule,
    FieldsetModule,
    ToolbarModule,
    TableModule]
})
export class PrimeNgModule { }
