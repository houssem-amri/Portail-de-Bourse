import { Component, OnInit } from '@angular/core';
import { OrdreService } from 'src/app/service/ordre.service';
import { Ordre } from './../../models/ordre';
@Component({
	selector: 'app-order-history',
	templateUrl: './order-history.component.html',
	styleUrls: [ './order-history.component.css' ]
})
export class OrderHistoryComponent implements OnInit {
	ordres: Ordre[];

	constructor(private ordreService: OrdreService) {}

	ngOnInit() {
		this.getAllHistoryOrdre();
	}
	getAllHistoryOrdre() {
		this.ordreService.getAllHistoryOrdre().subscribe((data) => {
			this.ordres = data;
			console.log('here ordres ', this.ordres);
		});
	}
}
