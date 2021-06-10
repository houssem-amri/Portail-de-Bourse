import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartsComponent } from './charts.component';

const routes: Routes = [
	{
		path: '',
		component: ChartsComponent,
		data: {
			breadcrumb: 'charts',
			status: true
		}
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class ChartsRoutingModule {}
