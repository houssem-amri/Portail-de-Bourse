import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompteTitreComponent } from './compte-titre.component';

const routes: Routes = [
	{
		path: '',
		component: CompteTitreComponent,
		data: {
			breadcrumb: 'compte-titre '
		}
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class CompteTitreRoutingModule {}
