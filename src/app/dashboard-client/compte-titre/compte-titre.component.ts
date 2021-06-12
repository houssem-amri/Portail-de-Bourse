import { Component, OnInit } from '@angular/core';
import { PositionTitreService } from 'src/app/service/position-titre.service';
import { SecaccountService } from 'src/app/service/secaccount.service';

@Component({
	selector: 'app-compte-titre',
	templateUrl: './compte-titre.component.html',
	styleUrls: ['./compte-titre.component.css']
})
export class CompteTitreComponent implements OnInit {
	Secaccount: any;
	Positiontitre: any;
	id: any;
	constructor(private SecaccountService: SecaccountService, private positionTitreService: PositionTitreService) { }

	ngOnInit() {
		this.id = JSON.parse(localStorage.getItem('connectedUserDorra'));
		this.SecaccountService.getSecaccountByUserId(this.id).subscribe((Secaccount) => {
			this.Secaccount = Secaccount[0];
			console.log('here Secaccount client', this.Secaccount);
			this.positionTitreService.getPositiontitreBySecaccountId(this.Secaccount.id).subscribe((Positiontitre) => {
				this.Positiontitre = Positiontitre
				console.log('here Positiontitre ', this.Positiontitre);

			})
		});
	}
}
