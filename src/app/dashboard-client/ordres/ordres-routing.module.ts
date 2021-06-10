import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdresComponent } from './ordres.component';

const routes: Routes = [
	{
		path: '',
		component: OrdresComponent,
		data: {
			breadcrumb: 'Mes ordres '
		}
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class OrdresRoutingModule {}
