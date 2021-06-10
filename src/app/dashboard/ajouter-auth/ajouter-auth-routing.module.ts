import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjouterAuthComponent } from './ajouter-auth.component';

const routes: Routes = [
	{
		path: '',
		component: AjouterAuthComponent,
		data: {
			breadcrumb: 'Ajouter-Authentification',
			status: true
		}
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class AjouterAuthRoutingModule {}
