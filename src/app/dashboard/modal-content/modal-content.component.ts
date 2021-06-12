import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientService } from 'src/app/service/client.service';
import { OperationService } from 'src/app/service/operation.service';
import { OrdreService } from 'src/app/service/ordre.service';
import { PositionTitreService } from 'src/app/service/position-titre.service';
import { Positiontitre } from 'src/app/models/positionTitre';

@Component({
	selector: 'app-modal-content',
	templateUrl: './modal-content.component.html',
	styleUrls: ['./modal-content.component.css']
})
export class ModalContentComponent implements OnInit {
	OperationForm: FormGroup;
	client: any;
	positionTitre: Positiontitre;
	curdate = new Date().getFullYear().toString() + '-' + (new Date().getMonth() + 1).toString() + '-' + new Date().getDate().toString();
	@Input() public ordre;
	@Output() passEntry: EventEmitter<any> = new EventEmitter();
	constructor(
		public activeModal: NgbActiveModal,
		private operationService: OperationService,
		private ordreService: OrdreService,
		private formBuilder: FormBuilder,
		private router: Router,
		private clientSevice: ClientService,
		private positionTitreService: PositionTitreService,

	) {
		this.positionTitre = new Positiontitre()
	}

	ngOnInit() {
		console.log(this.curdate);


		this.clientSevice.getClientById(this.ordre.client).subscribe((client) => {
			this.client = client
			console.log('here client', this.client);

		})
		this.OperationForm = this.formBuilder.group({
			Code_isin_opt: [''],
			security: [''],
			tradingDate: [''],
			valueDate: [''],
			sens: [''],
			currency: [''],
			status: [''],
			quanti: [''],
			price: [''],
			feeamount: [''],
			mntbrt: [''],
			MntNet: ['']
		});
	}
	passBack() {
		this.passEntry.emit(this.ordre);
		this.activeModal.close(this.ordre);
	}
	addOperation(operation) {

		operation.client = this.ordre.client;
		operation.test = true;
		operation.Valeur = this.ordre.Valeur;
		operation.etat = this.ordre.etat;
		operation.secaccount = this.ordre.secaccount;
		operation.cashaccount = this.ordre.cashaccount;
		this.operationService.addOperation(operation).subscribe((data) => {
			console.log('operation added', data);
			this.positionTitre.positiondate = this.curdate
			this.positionTitre.enddate = data.tradingDate
			this.positionTitre.security = data.security
			this.positionTitre.statuts = data.status
			this.positionTitre.quanti = data.quanti
			this.positionTitre.priceUnitBrt = data.mntbrt
			this.positionTitre.priceUnitNet = data.MntNet
			this.positionTitre.pribrt = (data.price * data.quanti)
			this.positionTitre.prinet = (this.positionTitre.pribrt + data.feeamount)
			this.positionTitre.secaccount = data.secaccount
			this.positionTitre.Valeur = data.Valeur
			console.log('here Positiontitre', this.positionTitre);

			this.positionTitreService.addPositionTitre(this.positionTitre).subscribe((positionTitre) => {
				console.log(' positionTitre added', positionTitre);

			})
			this.ordre.test = true;
			this.ordreService.updateOrdre(this.ordre).subscribe((rep) => {
				console.log('ordre update', rep);
				this.passBack();
				this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
					this.router.navigate(['orders']);
				});
			});
		});
	}
}
