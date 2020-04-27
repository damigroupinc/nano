import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { FormularioPage } from '../formulario/formulario.page';
import { MesPage } from '../mes/mes.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  entryComponents:[FormularioPage,MesPage],
  declarations: [Tab1Page,FormularioPage,MesPage]
})
export class Tab1PageModule {}
