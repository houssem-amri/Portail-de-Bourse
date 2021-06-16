import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientService } from 'src/app/service/client.service';
import { OperationService } from 'src/app/service/operation.service';
import { OrdreService } from 'src/app/service/ordre.service';
import { PositionTitreService } from 'src/app/service/position-titre.service';
import { Positiontitre } from 'src/app/models/positionTitre';
import { Positionespece } from 'src/app/models/Positionespece';
import { PositionespeceService } from 'src/app/service/positionespece.service';
import { CashaccountService } from 'src/app/service/cashaccount.service';
import { ToastType, Toaster } from 'ngx-toast-notifications';
@Component({
	selector: 'app-modal-content',
	templateUrl: './modal-content.component.html',
	styleUrls: ['./modal-content.component.css']
})
export class ModalContentComponent implements OnInit {
	OperationForm: FormGroup;
	client: any;
	Cashaccount: any;
	positionTitre: Positiontitre;
	Positionespece: Positionespece;
	private types: Array<ToastType> = ['danger'];
	private text = '  solde Cashaccount est insuffisant';
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
		private PositionespeceService: PositionespeceService,
		private CashaccountService: CashaccountService,
		private toaster: Toaster

	) {
		this.positionTitre = new Positiontitre()
		this.Positionespece = new Positionespece()
	}

	ngOnInit() {
		console.log('here order modal ', this.ordre);
		this.CashaccountService.getCashaccountById(this.ordre.cashaccount).subscribe((cashaccount) => {
			this.Cashaccount = cashaccount
			console.log('here Cashaccount by id', this.Cashaccount.solde);

		})

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
		operation.mntbrt = (operation.price * operation.quanti);
		operation.MntNet = (operation.mntbrt + operation.feeamount);
		operation.secaccount = this.ordre.secaccount;
		operation.cashaccount = this.ordre.cashaccount;
		if (this.Cashaccount.solde >= operation.MntNet) {
			this.operationService.addOperation(operation).subscribe((data) => {
				console.log('operation added', data);
				this.positionTitre.positiondate = this.curdate
				this.positionTitre.enddate = data.tradingDate
				this.positionTitre.security = data.security
				this.positionTitre.statuts = data.status
				this.positionTitre.quanti = data.quanti
				this.positionTitre.priceUnitBrt = data.mntbrt
				this.positionTitre.priceUnitNet = data.MntNet
				this.positionTitre.pribrt = this.positionTitre.priceUnitBrt
				this.positionTitre.prinet = this.positionTitre.priceUnitNet
				this.positionTitre.secaccount = data.secaccount
				this.positionTitre.Valeur = data.Valeur
				this.positionTitre.Operation = data.id
				console.log('here Positiontitre', this.positionTitre);

				this.positionTitreService.addPositionTitre(this.positionTitre).subscribe((positionTitre) => {
					console.log(' positionTitre added', positionTitre);

				})
				this.Positionespece.positiondate = this.curdate
				this.Positionespece.enddate = data.tradingDate
				this.Positionespece.currency = data.currency
				this.Positionespece.statuts = data.status
				this.Positionespece.amount = this.positionTitre.prinet
				this.Positionespece.cashaccount = data.cashaccount
				this.PositionespeceService.addPositionespece(this.Positionespece).subscribe((Positionespece) => {
					console.log(' Positionespece added', Positionespece);
				})
				this.Cashaccount.solde = this.Cashaccount.solde - this.Positionespece.amount
				this.CashaccountService.updateCashaccount(this.Cashaccount).subscribe((update) => {
					console.log('cash account updat ', update);

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
		} else {

			console.log('sold insu !!!!!!!!');
			this.passBack();
			this.showToast();

		}

	}
	get randomType() {
		return this.types[Math.ceil((Math.random() * 8)) % this.types.length];
	}
	showToast() {
		const type = this.randomType;
		this.toaster.open({
			text: this.text,
			caption: 'Alert',
			type: type,
		});
	}

}
