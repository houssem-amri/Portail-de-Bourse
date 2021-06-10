import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailUtilisateurComponent } from './detail-utilisateur.component';

const routes: Routes = [
	{
		path: '',
		component: DetailUtilisateurComponent,
		data: {
			breadcrumb: 'detail-utilisateur',
			status: true
		}
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class DetailUtilisateurRoutingModule {}
