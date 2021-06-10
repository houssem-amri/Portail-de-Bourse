import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdresRoutingModule } from './ordres-routing.module';
import { OrdresComponent } from './ordres.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModalContentComponent } from '../modal-content/modal-content.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
	declarations: [ OrdresComponent, ModalContentComponent ],
	imports: [ CommonModule, OrdresRoutingModule, SharedModule, NgbModule ],

	entryComponents: [ ModalContentComponent ]
})
export class OrdresModule {}
