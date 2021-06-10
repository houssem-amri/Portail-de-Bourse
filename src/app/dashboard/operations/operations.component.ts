import { Component, OnInit } from '@angular/core';
import { OperationService } from 'src/app/service/operation.service';
import { Operation } from './../../models/Operation';
@Component({
	selector: 'app-operations',
	templateUrl: './operations.component.html',
	styleUrls: [ './operations.component.css' ]
})
export class OperationsComponent implements OnInit {
	operation: Operation;
	constructor(private operationService: OperationService) {}

	ngOnInit() {
		this.getAllOperation();
	}
	getAllOperation() {
		this.operationService.getAllOperation().subscribe((data) => {
			this.operation = data;
			console.log('here all operation', this.operation);
		});
	}
}
