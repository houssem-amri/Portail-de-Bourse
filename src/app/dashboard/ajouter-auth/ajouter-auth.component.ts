import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthentificationService } from 'src/app/service/authentification.service';
import { Authentification } from './../../models/auth';

@Component({
	selector: 'app-ajouter-auth',
	templateUrl: './ajouter-auth.component.html',
	styleUrls: [ './ajouter-auth.component.css' ]
})
export class AjouterAuthComponent implements OnInit {
	addAuthForm: FormGroup;
	auth: any = {};
	id: any;
	constructor(
		private authService: AuthentificationService,
		private formBuilder: FormBuilder,
		private activatedRouted: ActivatedRoute,
		private router: Router
	) {
		this.auth = new Authentification();
	}

	ngOnInit() {
		this.id = this.activatedRouted.snapshot.paramMap.get('id');
		console.log('here id client', this.id);

		this.addAuthForm = this.formBuilder.group({
			login: [ '' ],
			password: [ '' ]
		});
	}
	addAuth() {
		this.auth.role = 'user';
		this.auth.user = this.id;
		this.authService.addAuth(this.auth).subscribe((data) => {
			console.log('here add Auth', data);
			this.router.navigate([ `ajouter-cashaccount/${this.id}` ]);
		});
	}
}
