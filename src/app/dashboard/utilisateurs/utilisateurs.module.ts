import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilisateursRoutingModule } from './utilisateurs-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { UtilisateursComponent } from './utilisateurs.component';

@NgModule({
	declarations: [ UtilisateursComponent ],
	imports: [ CommonModule, UtilisateursRoutingModule, SharedModule ]
})
export class UtilisateursModule {}
