import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthentificationService } from 'src/app/service/authentification.service';
import { ClientService } from 'src/app/service/client.service';
import { ContactService } from 'src/app/service/contact.service';
import { DocumentService } from 'src/app/service/document.service';

@Component({
	selector: 'app-detail-utilisateur',
	templateUrl: './detail-utilisateur.component.html',
	styleUrls: [ './detail-utilisateur.component.css' ]
})
export class DetailUtilisateurComponent implements OnInit {
	id: any;
	client: any;
	auth: any;
	contact: any;
	document: any;
	constructor(
		private activatedRouted: ActivatedRoute,
		private clientService: ClientService,
		private authService: AuthentificationService,
		private documentService: DocumentService,
		private contactService: ContactService
	) {}

	ngOnInit() {
		this.id = this.activatedRouted.snapshot.paramMap.get('id');
		this.clientService.getClientById(this.id).subscribe((data) => {
			this.client = data;
			console.log('here client', this.client);
		});
		this.authService.getAuthByUserId(this.id).subscribe((rep) => {
			this.auth = rep[0];
			console.log('here auth client', this.auth);
		});
		this.contactService.getContactByUserId(this.id).subscribe((contact) => {
			this.contact = contact[0];
			console.log('here contact client', this.contact);
		});
		this.documentService.getDocumentByUserId(this.id).subscribe((document) => {
			this.document = document[0];
			console.log('here document client', this.document);
		});
	}
}
