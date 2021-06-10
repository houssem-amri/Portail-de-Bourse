import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientOperationsRoutingModule } from './client-operations-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClientOperationsComponent } from './client-operations.component';

@NgModule({
	declarations: [ ClientOperationsComponent ],
	imports: [ CommonModule, ClientOperationsRoutingModule, SharedModule ]
})
export class ClientOperationsModule {}
