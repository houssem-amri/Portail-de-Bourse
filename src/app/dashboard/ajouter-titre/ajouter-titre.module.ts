import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AjouterTitreRoutingModule } from './ajouter-titre-routing.module';
import { AjouterTitreComponent } from './ajouter-titre.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
	declarations: [ AjouterTitreComponent ],
	imports: [ CommonModule, AjouterTitreRoutingModule, SharedModule ]
})
export class AjouterTitreModule {}
