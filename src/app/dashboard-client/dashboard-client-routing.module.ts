import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardClientComponent } from './dashboard-client.component';

const routes: Routes = [
	{
		path: '',
		component: DashboardClientComponent,
		data: {
			breadcrumb: 'Dashboard-client '
		}
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class DashboardClientRoutingModule {}
