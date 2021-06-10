import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		data: {
			title: 'Authentication',
			status: false
		},
		children: [
			{
				path: 'login',
				loadChildren: () => import('./login/login.module').then((m) => m.LoginModule)
			},

			{
				path: 'admin/registration',
				loadChildren: () => import('./registration/registration.module').then((m) => m.RegistrationModule)
			}
		]
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class AuthRoutingModule {}
