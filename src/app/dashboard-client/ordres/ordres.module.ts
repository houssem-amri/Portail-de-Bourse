import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdresRoutingModule } from './ordres-routing.module';
import { OrdresComponent } from './ordres.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
	declarations: [ OrdresComponent ],
	imports: [ CommonModule, OrdresRoutingModule, SharedModule ]
})
export class OrdresModule {}
