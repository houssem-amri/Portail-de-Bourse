import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AjouterOrdresVenteRoutingModule } from './ajouter-ordres-vente-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AjouterOrdresVenteComponent } from './ajouter-ordres-vente.component';


@NgModule({
  declarations: [AjouterOrdresVenteComponent],
  imports: [
    CommonModule,
    AjouterOrdresVenteRoutingModule,
    SharedModule
  ]
})
export class AjouterOrdresVenteModule { }
