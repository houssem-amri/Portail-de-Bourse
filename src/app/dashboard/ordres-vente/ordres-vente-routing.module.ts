import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdresVenteComponent } from './ordres-vente.component';


const routes: Routes = [
  {
    path: '',
    component: OrdresVenteComponent,
    data: {
      breadcrumb: "Orders de vente",
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdresVenteRoutingModule { }
