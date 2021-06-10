import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjouterOrdresComponent } from './ajouter-ordres.component';

const routes: Routes = [
	{
		path: '',
		component: AjouterOrdresComponent,
		data: {
			breadcrumb: 'ajouter-ordres '
		}
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class AjouterOrdresRoutingModule {}
