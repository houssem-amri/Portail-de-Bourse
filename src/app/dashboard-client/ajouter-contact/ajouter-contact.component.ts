import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContactService } from 'src/app/service/contact.service';
import { Contact } from './../../models/Contact';
@Component({
	selector: 'app-ajouter-contact',
	templateUrl: './ajouter-contact.component.html',
	styleUrls: [ './ajouter-contact.component.css' ]
})
export class AjouterContactComponent implements OnInit {
	addContactForm: FormGroup;
	id: any;
	contact: Contact;
	constructor(private formBuilder: FormBuilder, private contactService: ContactService) {
		this.contact = new Contact();
	}

	ngOnInit() {
		this.id = JSON.parse(localStorage.getItem('connectedUserDorra'));
		this.addContactForm = this.formBuilder.group({
			email: [ '' ],
			tel: [ '' ],
			fax: [ '' ],
			mobile: [ '' ],
			ville: [ '' ],
			Language: [ '' ],
			zipcode: [ '' ],
			isdefault: [ '' ]
		});
	}
	addContact() {
		this.contact.user = this.id;

		this.contactService.addContact(this.contact).subscribe((res) => {
			console.log('here contact added', res);
		});
	}
}
