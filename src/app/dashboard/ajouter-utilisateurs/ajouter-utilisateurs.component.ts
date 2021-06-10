import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/service/client.service';
import { Client } from './../../models/client';

@Component({
	selector: 'app-ajouter-utilisateurs',
	templateUrl: './ajouter-utilisateurs.component.html',
	styleUrls: [ './ajouter-utilisateurs.component.css' ]
})
export class AjouterUtilisateursComponent implements OnInit {
	addClientForm: FormGroup;
	addedClient: any;
	client: Client;
	constructor(private formBuilder: FormBuilder, private clientService: ClientService, private router: Router) {
		this.client = new Client();
	}

	ngOnInit() {
		this.addClientForm = this.formBuilder.group({
			birthday: [ '' ],
			civilstatuts: [ '' ],
			firstname: [ '' ],
			Lastname: [ '' ],
			etranger: [ '' ],
			resident: [ '' ],
			birthcountry: [ '' ],
			nationality: [ '' ],
			gender: [ '' ],
			birthcity: [ '' ],
			residcity: [ '' ],
			entitytype: [ '' ],
			statuts: [ '' ],
			activitysector: [ '' ],
			chargeduser: [ '' ],
			ugest: [ '' ]
		});
	}
	addClient() {
		this.clientService.addClient(this.client).subscribe((data) => {
			console.log('here add client', data);
			this.addedClient = data;
			console.log('here id  client added', this.addedClient.id);
			this.router.navigate([ `ajouter-authentification/${this.addedClient.id}` ]);
		});
	}
}
