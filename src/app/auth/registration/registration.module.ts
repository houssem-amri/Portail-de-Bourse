import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegistrationComponent } from './registration.component';

@NgModule({
	declarations: [ RegistrationComponent ],
	imports: [ CommonModule, RegistrationRoutingModule, SharedModule ]
})
export class RegistrationModule {}
