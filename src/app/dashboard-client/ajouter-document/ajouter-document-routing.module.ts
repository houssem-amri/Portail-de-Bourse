import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjouterDocumentComponent } from './ajouter-document.component';

const routes: Routes = [
	{
		path: '',
		component: AjouterDocumentComponent,
		data: {
			breadcrumb: 'ajouter-document '
		}
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class AjouterDocumentRoutingModule {}
