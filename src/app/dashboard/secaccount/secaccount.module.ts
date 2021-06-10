import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecaccountRoutingModule } from './secaccount-routing.module';
import { SecaccountComponent } from './secaccount.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
	declarations: [ SecaccountComponent ],
	imports: [ CommonModule, SecaccountRoutingModule, SharedModule ]
})
export class SecaccountModule {}
