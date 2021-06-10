import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UtilisateursComponent } from './utilisateurs.component';

const routes: Routes = [
	{
		path: '',
		component: UtilisateursComponent,
		data: {
			breadcrumb: 'Mes utilisateurs',
			status: true
		}
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class UtilisateursRoutingModule {}
