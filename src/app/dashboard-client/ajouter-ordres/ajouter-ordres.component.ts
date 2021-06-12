import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CashaccountService } from 'src/app/service/cashaccount.service';
import { OrdreService } from 'src/app/service/ordre.service';
import { SecaccountService } from 'src/app/service/secaccount.service';
import { Ordre } from './../../models/ordre';

@Component({
	selector: 'app-ajouter-ordres',
	templateUrl: './ajouter-ordres.component.html',
	styleUrls: ['./ajouter-ordres.component.css']
})
export class AjouterOrdresComponent implements OnInit {
	addOrderForm: FormGroup;
	id: any;
	order: Ordre;
	valeur: any;
	constructor(
		private formBuilder: FormBuilder,
		private ordreService: OrdreService,
		private CashaccountService: CashaccountService,
		private SecaccountService: SecaccountService,
		private activatedrouter: ActivatedRoute,
		private router: Router
	) {
		this.order = new Ordre();
	}

	ngOnInit() {
		this.id = JSON.parse(localStorage.getItem('connectedUserDorra'));
		this.valeur = this.activatedrouter.snapshot.paramMap.get('id');

		this.addOrderForm = this.formBuilder.group({
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
			etat: ['']
		});
	}
	addOrder() {
		this.SecaccountService.getSecaccountByUserId(this.id).subscribe((secaccount) => {


			this.CashaccountService.getCashaccountByUserId(this.id).subscribe((cashaccount) => {


				this.order.cashaccount = cashaccount[0].id;
				this.order.secaccount = secaccount[0].id;
				this.order.Valeur = this.valeur;
				this.order.client = this.id;
				this.order.test = false;
				this.order.mntbrt = this.order.price * this.order.quanti;
				this.order.MntNet = this.order.mntbrt + this.order.feeamount;

				if (cashaccount[0].solde >= this.order.MntNet) {
					this.ordreService.addOrdre(this.order).subscribe((res) => {
						console.log('here order', res);
					});
					this.router.navigate(['dashboard-client'])
				} else {
					console.log('solde insu !!!!!!!!');

				}

			})

		})


	}
}
