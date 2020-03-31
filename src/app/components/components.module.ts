import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AvisosComponent } from './avisos/avisos.component';
import { AvisoComponent } from './aviso/aviso.component';



@NgModule({
  declarations: [
    AvisosComponent,
    AvisoComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    AvisosComponent,
  ]
})
export class ComponentsModule { }
