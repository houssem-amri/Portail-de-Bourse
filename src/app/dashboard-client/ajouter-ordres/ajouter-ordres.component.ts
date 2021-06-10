import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OrdreService } from 'src/app/service/ordre.service';
import { Ordre } from './../../models/ordre';

@Component({
	selector: 'app-ajouter-ordres',
	templateUrl: './ajouter-ordres.component.html',
	styleUrls: [ './ajouter-ordres.component.css' ]
})
export class AjouterOrdresComponent implements OnInit {
	addOrderForm: FormGroup;
	id: any;
	order: Ordre;
	valeur: any;
	constructor(
		private formBuilder: FormBuilder,
		private ordreService: OrdreService,
		private activatedrouter: ActivatedRoute
	) {
		this.order = new Ordre();
	}

	ngOnInit() {
		this.id = JSON.parse(localStorage.getItem('connectedUserDorra'));
		this.valeur = this.activatedrouter.snapshot.paramMap.get('id');

		this.addOrderForm = this.formBuilder.group({
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
	addOrder() {
		this.order.Valeur = this.valeur;
		this.order.client = this.id;
		this.order.test = false;
		this.ordreService.addOrdre(this.order).subscribe((res) => {
			console.log('here order', res);
		});
	}
}
