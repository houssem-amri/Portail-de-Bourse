import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AjouterOrdresRoutingModule } from './ajouter-ordres-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AjouterOrdresComponent } from './ajouter-ordres.component';
import { ToastNotificationsModule } from 'ngx-toast-notifications';

@NgModule({
	declarations: [AjouterOrdresComponent],
	imports: [CommonModule, AjouterOrdresRoutingModule, SharedModule, ToastNotificationsModule]
})
export class AjouterOrdresModule { }
