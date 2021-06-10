import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjouterContactComponent } from './ajouter-contact.component';

const routes: Routes = [
	{
		path: '',
		component: AjouterContactComponent,
		data: {
			breadcrumb: 'ajouter-contact '
		}
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class AjouterContactRoutingModule {}
