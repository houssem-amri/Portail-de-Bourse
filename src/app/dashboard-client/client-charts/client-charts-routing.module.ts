import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientChartsComponent } from './client-charts.component';

const routes: Routes = [
	{
		path: '',
		component: ClientChartsComponent,
		data: {
			breadcrumb: 'charts-client '
		}
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class ClientChartsRoutingModule {}
