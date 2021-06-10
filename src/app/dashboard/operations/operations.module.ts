import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationsRoutingModule } from './operations-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { OperationsComponent } from './operations.component';

@NgModule({
	declarations: [ OperationsComponent ],
	imports: [ CommonModule, OperationsRoutingModule, SharedModule, SharedModule ]
})
export class OperationsModule {}
