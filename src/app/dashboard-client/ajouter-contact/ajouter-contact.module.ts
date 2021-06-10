import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AjouterContactRoutingModule } from './ajouter-contact-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AjouterContactComponent } from './ajouter-contact.component';

@NgModule({
	declarations: [ AjouterContactComponent ],
	imports: [ CommonModule, AjouterContactRoutingModule, SharedModule ]
})
export class AjouterContactModule {}
