import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjouterUtilisateursComponent } from './ajouter-utilisateurs.component';

const routes: Routes = [
	{
		path: '',
		component: AjouterUtilisateursComponent,
		data: {
			breadcrumb: 'Ajouter-utilisateurs',
			status: true
		}
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class AjouterUtilisateursRoutingModule {}
