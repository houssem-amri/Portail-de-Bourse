import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';

import { AdminComponent } from './layouts/admin/admin.component';
import { ClientComponent } from './layouts/client/client.component';

const routes: Routes = [
	{
		path: '',
		component: AuthComponent,
		children: [
			{
				path: '',
				redirectTo: 'auth/login',
				pathMatch: 'full'
			},
			{
				path: 'auth',
				loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule)
			}
		]
	},
	{
		path: '',
		component: AdminComponent,
		children: [
			{
				path: 'dashboard',
				loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule)
			},

			{
				path: 'Operations',
				loadChildren: () => import('./dashboard/operations/operations.module').then((m) => m.OperationsModule)
			},

			{
				path: 'orders',
				loadChildren: () => import('./dashboard/ordres/ordres.module').then((m) => m.OrdresModule)
			},
			{
				path: 'orders-de-Vente',
				loadChildren: () => import('./dashboard/ordres-vente/ordres-vente.module').then((m) => m.OrdresVenteModule)
			},
			{
				path: 'order-history',
				loadChildren: () =>
					import('./dashboard/order-history/order-history.module').then((m) => m.OrderHistoryModule)
			},
			{
				path: 'charts',
				loadChildren: () => import('./dashboard/charts/charts.module').then((m) => m.ChartsModule)
			},

			{
				path: 'ajouter-cours',
				loadChildren: () =>
					import('./dashboard/ajouter-titre/ajouter-titre.module').then((m) => m.AjouterTitreModule)
			},

			{
				path: 'ajouter-utilisateurs',
				loadChildren: () =>
					import('./dashboard/ajouter-utilisateurs/ajouter-utilisateurs.module').then(
						(m) => m.AjouterUtilisateursModule
					)
			},
			{
				path: 'ajouter-authentification/:id',
				loadChildren: () =>
					import('./dashboard/ajouter-auth/ajouter-auth.module').then((m) => m.AjouterAuthModule)
			},
			{
				path: 'ajouter-cashaccount/:id',
				loadChildren: () =>
					import('./dashboard/ajouter-cashaccount/ajouter-cashaccount.module').then(
						(m) => m.AjouterCashaccountModule
					)
			},
			{
				path: 'ajouter-secaccount/:id',
				loadChildren: () => import('./dashboard/secaccount/secaccount.module').then((m) => m.SecaccountModule)
			},
			{
				path: 'detail-utilisateur/:id',
				loadChildren: () =>
					import('./dashboard/detail-utilisateur/detail-utilisateur.module').then(
						(m) => m.DetailUtilisateurModule
					)
			},

			{
				path: 'utilisateurs',
				loadChildren: () =>
					import('./dashboard/utilisateurs/utilisateurs.module').then((m) => m.UtilisateursModule)
			}
		]
	},
	{
		path: '',
		component: ClientComponent,
		children: [
			{
				path: 'dashboard-client',
				loadChildren: () =>
					import('./dashboard-client/dashboard-client.module').then((m) => m.DashboardClientModule)
			},
			{
				path: 'compte-titre',
				loadChildren: () =>
					import('./dashboard-client/compte-titre/compte-titre.module').then((m) => m.CompteTitreModule)
			},
			{
				path: 'compte-espèce',
				loadChildren: () =>
					import('./dashboard-client/compte-espece/compte-espece.module').then((m) => m.CompteEspeceModule)
			},
			{
				path: 'add-ordres/:id',
				loadChildren: () =>
					import('./dashboard-client/ajouter-ordres/ajouter-ordres.module').then((m) => m.AjouterOrdresModule)
			},
			{
				path: 'vendre-ordres/:id',
				loadChildren: () =>
					import('./dashboard-client/ajouter-ordres-vente/ajouter-ordres-vente.module').then((m) => m.AjouterOrdresVenteModule)
			},
			{
				path: 'ordres-client',
				loadChildren: () => import('./dashboard-client/ordres/ordres.module').then((m) => m.OrdresModule)
			},
			{
				path: 'Operations-client',
				loadChildren: () =>
					import('./dashboard-client/client-operations/client-operations.module').then(
						(m) => m.ClientOperationsModule
					)
			},
			{
				path: 'charts-client',
				loadChildren: () =>
					import('./dashboard-client/client-charts/client-charts.module').then((m) => m.ClientChartsModule)
			},
			{
				path: 'ajouter-contact',
				loadChildren: () =>
					import('./dashboard-client/ajouter-contact/ajouter-contact.module').then(
						(m) => m.AjouterContactModule
					)
			},
			{
				path: 'ajouter-document',
				loadChildren: () =>
					import('./dashboard-client/ajouter-document/ajouter-document.module').then(
						(m) => m.AjouterDocumentModule
					)
			}
		]
	},

	{
		path: '**',
		redirectTo: ''
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
