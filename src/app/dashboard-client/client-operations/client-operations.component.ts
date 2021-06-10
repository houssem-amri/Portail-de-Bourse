import { Component, OnInit } from '@angular/core';
import { OperationService } from 'src/app/service/operation.service';
import { Operation } from './../../models/Operation';

@Component({
	selector: 'app-client-operations',
	templateUrl: './client-operations.component.html',
	styleUrls: [ './client-operations.component.css' ]
})
export class ClientOperationsComponent implements OnInit {
	id: any;
	operation: Operation;
	constructor(private operationService: OperationService) {}

	ngOnInit() {
		this.id = JSON.parse(localStorage.getItem('connectedUserDorra'));
		this.getAllOperation();
	}
	getAllOperation() {
		this.operationService.getCashaccountByUserId(this.id).subscribe((data) => {
			this.operation = data;
			console.log('here all operation by user Id', this.operation);
		});
	}
}
