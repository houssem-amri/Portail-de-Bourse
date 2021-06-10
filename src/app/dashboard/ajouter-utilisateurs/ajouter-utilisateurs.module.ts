import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AjouterUtilisateursRoutingModule } from './ajouter-utilisateurs-routing.module';
import { AjouterUtilisateursComponent } from './ajouter-utilisateurs.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
	declarations: [ AjouterUtilisateursComponent ],
	imports: [ CommonModule, AjouterUtilisateursRoutingModule, SharedModule ]
})
export class AjouterUtilisateursModule {}
