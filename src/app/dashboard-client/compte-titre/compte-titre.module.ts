import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompteTitreRoutingModule } from './compte-titre-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CompteTitreComponent } from './compte-titre.component';

@NgModule({
	declarations: [ CompteTitreComponent ],
	imports: [ CommonModule, CompteTitreRoutingModule, SharedModule ]
})
export class CompteTitreModule {}
