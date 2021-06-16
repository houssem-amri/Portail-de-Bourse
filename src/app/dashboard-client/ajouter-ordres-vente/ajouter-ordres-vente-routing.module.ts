import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjouterOrdresVenteComponent } from './ajouter-ordres-vente.component';


const routes: Routes = [
  {
    path: '',
    component: AjouterOrdresVenteComponent,
    data: {
      breadcrumb: 'vendre-ordres '
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AjouterOrdresVenteRoutingModule { }
