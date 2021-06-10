import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CashaccountService } from 'src/app/service/cashaccount.service';
import { Cashaccount } from './../../models/Cashaccount';

@Component({
	selector: 'app-ajouter-cashaccount',
	templateUrl: './ajouter-cashaccount.component.html',
	styleUrls: [ './ajouter-cashaccount.component.css' ]
})
export class AjouterCashaccountComponent implements OnInit {
	addCashaccountForm: FormGroup;
	Cashaccount: any = {};
	id: any;
	constructor(
		private formBuilder: FormBuilder,
		private activatedRouted: ActivatedRoute,
		private CashaccountService: CashaccountService,
		private router: Router
	) {
		this.Cashaccount = new Cashaccount();
	}

	ngOnInit() {
		this.id = this.activatedRouted.snapshot.paramMap.get('id');
		console.log('here id client', this.id);

		this.addCashaccountForm = this.formBuilder.group({
			number: [ '' ],
			owner: [ '' ],
			currency: [ '' ],
			ugest: [ '' ],
			description: [ '' ],
			statuts: [ '' ],
			metpay: [ '' ],
			opendate: [ '' ],
			closuredate: [ '' ]
		});
	}
	addCashaccount() {
		this.Cashaccount.user = this.id;
		this.CashaccountService.addCashaccount(this.Cashaccount).subscribe((data) => {
			console.log('here Cashaccount added ', data);
			this.router.navigate([ `ajouter-secaccount/${this.id}` ]);
		});
	}
}
