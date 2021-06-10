import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompteEspeceRoutingModule } from './compte-espece-routing.module';
import { CompteEspeceComponent } from './compte-espece.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
	declarations: [ CompteEspeceComponent ],
	imports: [ CommonModule, CompteEspeceRoutingModule, SharedModule ]
})
export class CompteEspeceModule {}
