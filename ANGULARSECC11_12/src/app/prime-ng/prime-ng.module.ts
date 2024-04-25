import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
//import { MenuModule } from 'primeng/menu'
import { MenubarModule } from 'primeng/menubar';
import {CardModule} from 'primeng/card'
import {FieldsetModule} from 'primeng/fieldset'
import {Panel, PanelModule} from 'primeng/panel'


@NgModule({
  exports: [
    //MenuModule,
    MenubarModule,
    ButtonModule,
    CardModule,
    FieldsetModule,
    PanelModule
  ],

})
export class PrimeNgModule { }
