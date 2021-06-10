import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { OperationService } from 'src/app/service/operation.service';
import { OrdreService } from 'src/app/service/ordre.service';
import { Operation } from './../../models/Operation';

@Component({
	selector: 'app-modal-content',
	templateUrl: './modal-content.component.html',
	styleUrls: [ './modal-content.component.css' ]
})
export class ModalContentComponent implements OnInit {
	OperationForm: FormGroup;

	@Input() public ordre;
	@Output() passEntry: EventEmitter<any> = new EventEmitter();
	constructor(
		public activeModal: NgbActiveModal,
		private operationService: OperationService,
		private ordreService: OrdreService,
		private formBuilder: FormBuilder,
		private router: Router
	) {}

	ngOnInit() {
		this.OperationForm = this.formBuilder.group({
			Code_isin_opt: [ '' ],
			security: [ '' ],
			tradingDate: [ '' ],
			valueDate: [ '' ],
			sens: [ '' ],
			currency: [ '' ],
			status: [ '' ],
			quanti: [ '' ],
			price: [ '' ],
			feeamount: [ '' ],
			mntbrt: [ '' ],
			MntNet: [ '' ]
		});
	}
	passBack() {
		this.passEntry.emit(this.ordre);
		this.activeModal.close(this.ordre);
	}
	addOperation(operation) {
		operation.client = this.ordre.client;
		operation.test = true;
		this.operationService.addOperation(operation).subscribe((data) => {
			console.log('operation added', data);
			this.ordre.test = true;
			this.ordreService.updateOrdre(this.ordre).subscribe((rep) => {
				console.log('ordre update', rep);
				this.passBack();
				this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
					this.router.navigate([ 'orders' ]);
				});
			});
		});
	}
}
