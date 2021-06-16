import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdresVenteRoutingModule } from './ordres-vente-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { OrdresVenteComponent } from './ordres-vente.component';
import { ModalContentVenteComponent } from '../modal-content-vente/modal-content-vente.component';


@NgModule({
  declarations: [OrdresVenteComponent, ModalContentVenteComponent],
  imports: [
    CommonModule,
    OrdresVenteRoutingModule,
    SharedModule
  ],
  entryComponents: [ModalContentVenteComponent]
})
export class OrdresVenteModule { }
