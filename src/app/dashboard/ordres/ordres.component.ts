import { Component, OnInit } from '@angular/core';
import { OrdreService } from 'src/app/service/ordre.service';
import { Ordre } from './../../models/ordre';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalContentComponent } from '../modal-content/modal-content.component';
import { ClientService } from 'src/app/service/client.service';

@Component({
	selector: 'app-ordres',
	templateUrl: './ordres.component.html',
	styleUrls: ['./ordres.component.css']
})
export class OrdresComponent implements OnInit {
	ordres: Ordre[];


	ordre: any;

	constructor(private ordreService: OrdreService, public modalService: NgbModal) { }

	ngOnInit() {
		this.getAllOrdres();
	}
	getAllOrdres() {
		this.ordreService.getAllOrdreAchat().subscribe((data) => {
			this.ordres = data;

			console.log('here ordres ', this.ordres);


		});
	}

	openModal(id) {
		this.ordreService.getOrdreById(id).subscribe((res) => {
			const modalRef = this.modalService.open(ModalContentComponent);
			modalRef.componentInstance.ordre = res;
			modalRef.result.then((result) => {
				if (result) {
					console.log(result);
				}
			});
		});

		// modalRef.componentInstance.passEntry.subscribe((receivedEntry) => {
		//   console.log(receivedEntry);
		// })
	}
	delete(id) {
		this.ordreService.deleteOrdre(id).subscribe((del) => {
			console.log('ordre deleted ', del);
			this.getAllOrdres();
		})
	}
}
