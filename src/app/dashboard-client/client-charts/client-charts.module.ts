import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientChartsRoutingModule } from './client-charts-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClientChartsComponent } from './client-charts.component';
import { ApexChartComponent } from 'src/app/dashboard/charts/apex-chart/apex-chart.component';

@NgModule({
	declarations: [ClientChartsComponent, ApexChartComponent],
	imports: [CommonModule, ClientChartsRoutingModule, SharedModule]
})
export class ClientChartsModule { }
