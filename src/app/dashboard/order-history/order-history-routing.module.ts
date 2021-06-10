import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderHistoryComponent } from './order-history.component';

const routes: Routes = [
	{
		path: '',
		component: OrderHistoryComponent,
		data: {
			breadcrumb: 'Orders History',
			status: true
		}
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class OrderHistoryRoutingModule {}
