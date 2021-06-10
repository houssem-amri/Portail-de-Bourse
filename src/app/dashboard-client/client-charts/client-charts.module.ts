import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientChartsRoutingModule } from './client-charts-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClientChartsComponent } from './client-charts.component';

@NgModule({
	declarations: [ ClientChartsComponent ],
	imports: [ CommonModule, ClientChartsRoutingModule, SharedModule ]
})
export class ClientChartsModule {}
