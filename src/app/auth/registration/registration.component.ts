import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { AuthentificationService } from '../../service/authentification.service';
@Component({
	selector: 'app-registration',
	templateUrl: './registration.component.html',
	styleUrls: [ './registration.component.css' ]
})
export class RegistrationComponent implements OnInit {
	addAdminForm: FormGroup;
	admin: any = {};
	constructor(private formBuilder: FormBuilder, private authService: AuthentificationService) {}

	ngOnInit() {
		document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
		this.addAdminForm = this.formBuilder.group({
			login: [ '' ],
			password: [ '' ]
		});
	}
	addAdmin() {
		this.admin.role = 'admin';
		this.authService.addAuth(this.admin).subscribe((data) => {
			console.log('user added ', data);
		});
	}
}
