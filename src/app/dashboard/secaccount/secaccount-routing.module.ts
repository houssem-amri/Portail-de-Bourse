import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecaccountComponent } from './secaccount.component';

const routes: Routes = [
	{
		path: '',
		component: SecaccountComponent,
		data: {
			breadcrumb: 'Ajouter Secaccount',
			status: true
		}
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class SecaccountRoutingModule {}
