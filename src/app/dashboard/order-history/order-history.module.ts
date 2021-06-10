import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderHistoryRoutingModule } from './order-history-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { OrderHistoryComponent } from './order-history.component';

@NgModule({
	declarations: [ OrderHistoryComponent ],
	imports: [ CommonModule, OrderHistoryRoutingModule, SharedModule ]
})
export class OrderHistoryModule {}
