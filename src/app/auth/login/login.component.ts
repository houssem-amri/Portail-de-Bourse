import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/service/authentification.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {
	loginForm: FormGroup;
	login: any = {};
	constructor(
		private formBuilder: FormBuilder,
		private router: Router,
		private authService: AuthentificationService
	) {}

	ngOnInit() {
		document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
		this.loginForm = this.formBuilder.group({
			login: [ '' ],
			password: [ '' ]
		});
	}
	validateLogin() {
		this.authService.getAuth().subscribe((data) => {
			console.log('here data', data);

			var findedUser;
			for (let i = 0; i < data.length; i++) {
				if (data[i].login == this.login.login && data[i].password == this.login.password) {
					findedUser = data[i];
					if (findedUser.role === 'user') {
						localStorage.setItem('connectedUserDorra', JSON.stringify(findedUser.user));
						this.router.navigate([ 'dashboard-client' ]);
					} else {
						this.router.navigate([ 'dashboard' ]);
					}
				}
			}
			console.log('here login', findedUser);
			// return findedUser;
		});
	}
}
