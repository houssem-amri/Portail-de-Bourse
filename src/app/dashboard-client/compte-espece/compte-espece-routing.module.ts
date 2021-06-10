import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompteEspeceComponent } from './compte-espece.component';

const routes: Routes = [
	{
		path: '',
		component: CompteEspeceComponent,
		data: {
			breadcrumb: 'Mon compte espéce '
		}
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class CompteEspeceRoutingModule {}
