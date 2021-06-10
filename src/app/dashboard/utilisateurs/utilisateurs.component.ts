import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/service/client.service';
import { Client } from './../../models/client';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Router } from '@angular/router';

@Component({
	selector: 'app-utilisateurs',
	templateUrl: './utilisateurs.component.html',
	styleUrls: [ './utilisateurs.component.css' ]
})
export class UtilisateursComponent implements OnInit {
	clients: Client[];
	user: any;
	constructor(private clientService: ClientService, private router: Router) {}

	ngOnInit() {
		this.getAllClient();
	}
	getAllClient() {
		this.clientService.getAllClient().subscribe((res) => {
			console.log('here get all client ', res);
			this.clients = res;
		});
	}
	delete(id) {
		this.clientService.deleteClient(id).subscribe(() => {
			this.getAllClient();
		});
	}

	goTo(id: any) {
		this.router.navigate([ `detail-utilisateur/${id}` ]);
	}
}
