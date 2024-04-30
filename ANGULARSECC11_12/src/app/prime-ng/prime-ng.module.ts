import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
//import { MenuModule } from 'primeng/menu'
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { Panel, PanelModule } from 'primeng/panel';
import { ToolbarModule } from 'primeng/toolbar';
import { StyleClassModule } from 'primeng/styleclass';
import { TableModule } from 'primeng/table';



@NgModule({
  exports: [
    //MenuModule,
    MenubarModule,
    ButtonModule,
    CardModule,
    FieldsetModule,
    PanelModule,
    ToolbarModule,
    StyleClassModule,
    TableModule,
  ],

})
export class PrimeNgModule { }
