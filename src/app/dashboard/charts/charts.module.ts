import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsRoutingModule } from './charts-routing.module';
import { ChartsComponent } from './charts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ApexChartComponent } from './apex-chart/apex-chart.component';

@NgModule({
	declarations: [ ChartsComponent, ApexChartComponent ],
	imports: [ CommonModule, ChartsRoutingModule, SharedModule ]
})
export class ChartsModule {}
