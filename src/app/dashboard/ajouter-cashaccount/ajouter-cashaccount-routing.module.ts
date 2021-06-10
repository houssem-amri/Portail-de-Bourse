import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjouterCashaccountComponent } from './ajouter-cashaccount.component';

const routes: Routes = [
	{
		path: '',
		component: AjouterCashaccountComponent,
		data: {
			breadcrumb: 'Ajouter-Cashaccount',
			status: true
		}
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class AjouterCashaccountRoutingModule {}
