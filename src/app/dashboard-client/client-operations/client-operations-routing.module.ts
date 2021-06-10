import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientOperationsComponent } from './client-operations.component';

const routes: Routes = [
	{
		path: '',
		component: ClientOperationsComponent,
		data: {
			breadcrumb: 'operations-client '
		}
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class ClientOperationsRoutingModule {}
