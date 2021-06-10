import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjouterTitreComponent } from './ajouter-titre.component';

const routes: Routes = [
	{
		path: '',
		component: AjouterTitreComponent,
		data: {
			breadcrumb: 'Ajouter-titre',
			status: true
		}
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class AjouterTitreRoutingModule {}
