import { Component, OnInit } from '@angular/core';
import { OrdreService } from 'src/app/service/ordre.service';

@Component({
	selector: 'app-ordres',
	templateUrl: './ordres.component.html',
	styleUrls: [ './ordres.component.css' ]
})
export class OrdresComponent implements OnInit {
	id: any;
	ordres: any;
	constructor(private ordresService: OrdreService) {}

	ngOnInit() {
		this.id = JSON.parse(localStorage.getItem('connectedUserDorra'));
		this.getAllOrdresByIdClient();
	}
	getAllOrdresByIdClient() {
		this.ordresService.getOrdresByIdClient(this.id).subscribe((data) => {
			this.ordres = data;
			console.log('here order by id client', this.ordres);
		});
	}
	delete(id){
		this.ordresService.deleteOrdre(id).subscribe((rep)=>{
			console.log('order deleted succ' ,rep);
			this.getAllOrdresByIdClient();
		})
	}
}
