import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AjouterAuthRoutingModule } from './ajouter-auth-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AjouterAuthComponent } from './ajouter-auth.component';

@NgModule({
	declarations: [ AjouterAuthComponent ],
	imports: [ CommonModule, AjouterAuthRoutingModule, SharedModule ]
})
export class AjouterAuthModule {}
