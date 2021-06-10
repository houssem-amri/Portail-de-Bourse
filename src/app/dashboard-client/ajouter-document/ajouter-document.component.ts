import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DocumentService } from 'src/app/service/document.service';
import { Document } from './../../models/Document';
@Component({
	selector: 'app-ajouter-document',
	templateUrl: './ajouter-document.component.html',
	styleUrls: [ './ajouter-document.component.css' ]
})
export class AjouterDocumentComponent implements OnInit {
	addDocumentForm: FormGroup;
	id: any;
	document: Document;
	constructor(private formBuilder: FormBuilder, private documentService: DocumentService) {
		this.document = new Document();
	}

	ngOnInit() {
		this.id = JSON.parse(localStorage.getItem('connectedUserDorra'));
		this.addDocumentForm = this.formBuilder.group({
			type: [ '' ],
			datedeli: [ '' ],
			dateexpi: [ '' ]
		});
	}
	addDocument() {
		this.document.user = this.id;

		this.documentService.addDocument(this.document).subscribe((res) => {
			console.log('here document added', res);
		});
	}
}
