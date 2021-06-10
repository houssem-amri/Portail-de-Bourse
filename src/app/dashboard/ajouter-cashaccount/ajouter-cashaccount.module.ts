import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AjouterCashaccountRoutingModule } from './ajouter-cashaccount-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';
import { AjouterCashaccountComponent } from './ajouter-cashaccount.component';

@NgModule({
	declarations: [ AjouterCashaccountComponent ],
	imports: [ CommonModule, AjouterCashaccountRoutingModule, SharedModule ]
})
export class AjouterCashaccountModule {}
