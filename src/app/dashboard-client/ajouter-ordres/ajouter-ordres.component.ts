import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CashaccountService } from 'src/app/service/cashaccount.service';
import { OrdreService } from 'src/app/service/ordre.service';
import { SecaccountService } from 'src/app/service/secaccount.service';
import { ValeurService } from 'src/app/service/valeur.service';
import { Ordre } from './../../models/ordre';
import { ToastType, Toaster } from 'ngx-toast-notifications';


@Component({
	selector: 'app-ajouter-ordres',
	templateUrl: './ajouter-ordres.component.html',
	styleUrls: ['./ajouter-ordres.component.css']
})
export class AjouterOrdresComponent implements OnInit {
	addOrderForm: FormGroup;
	id: any;
	order: Ordre;
	idValeur: any;
	private types: Array<ToastType> = ['danger'];
	private text = '  solde Cashaccount est insuffisant';
	constructor(
		private formBuilder: FormBuilder,
		private ordreService: OrdreService,
		private CashaccountService: CashaccountService,
		private SecaccountService: SecaccountService,
		private valeurService: ValeurService,
		private activatedrouter: ActivatedRoute,
		private router: Router,
		private toaster: Toaster
	) {
		this.order = new Ordre();
	}

	ngOnInit() {
		this.id = JSON.parse(localStorage.getItem('connectedUserDorra'));
		this.idValeur = this.activatedrouter.snapshot.paramMap.get('id');

		this.addOrderForm = this.formBuilder.group({

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
	addOrder() {
		this.SecaccountService.getSecaccountByUserId(this.id).subscribe((secaccount) => {
			this.valeurService.getValeurById(this.idValeur).subscribe((valeur) => {
				console.log('here valeur by id', valeur);
				this.CashaccountService.getCashaccountByUserId(this.id).subscribe((cashaccount) => {


					this.order.Code_isin_opt = valeur.Code_isin_opt;
					this.order.cashaccount = cashaccount[0].id;
					this.order.secaccount = secaccount[0].id;
					this.order.Valeur = this.idValeur;
					this.order.client = this.id;
					this.order.test = false;
					this.order.etat = "achat";
					this.order.mntbrt = this.order.price * this.order.quanti;
					this.order.MntNet = this.order.mntbrt + this.order.feeamount;

					if (cashaccount[0].solde >= this.order.MntNet) {
						this.ordreService.addOrdre(this.order).subscribe((res) => {
							console.log('here order', res);
						});
						this.router.navigate(['dashboard-client'])
					} else {
						console.log('solde insu !!!!!!!!');
						this.showToast();

					}

				})

			})



		})


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
