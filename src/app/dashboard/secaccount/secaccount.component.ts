import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SecaccountService } from 'src/app/service/secaccount.service';
import { Secaccount } from './../../models/Secaccount';

@Component({
	selector: 'app-secaccount',
	templateUrl: './secaccount.component.html',
	styleUrls: ['./secaccount.component.css']
})
export class SecaccountComponent implements OnInit {
	addSecaccountForm: FormGroup;
	Secaccount: any = {};
	id: any;
	constructor(
		private formBuilder: FormBuilder,
		private activatedRouted: ActivatedRoute,
		private SecaccountService: SecaccountService,
		private router: Router
	) {
		this.Secaccount = new Secaccount();
	}

	ngOnInit() {
		this.id = this.activatedRouted.snapshot.paramMap.get('id');
		console.log('here id client', this.id);

		this.addSecaccountForm = this.formBuilder.group({
			number: [''],
			managementtype: [''],
			ugest: [''],
			description: [''],
			statuts: [''],
			chargeduser: [''],
			opendate: [''],
			closuredate: ['']
		});
	}
	addSecaccount() {
		this.Secaccount.user = this.id;
		this.SecaccountService.addSecaccount(this.Secaccount).subscribe((data) => {
			console.log('here Secaccount added ', data);
			this.router.navigate(['utilisateurs']);
		});
	}
}
