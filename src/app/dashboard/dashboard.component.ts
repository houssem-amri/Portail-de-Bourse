import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { valeur } from '../models/valeur';
import { PositionTitreService } from '../service/position-titre.service';
@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: [ './dashboard.component.scss' ],
	encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
	cours: valeur[];
	constructor(private positionTitreService: PositionTitreService) {}

	ngOnInit() {
		this.getAllPositiontitre();
	}
	getAllPositiontitre() {
		this.positionTitreService.getAllPositiontitre().subscribe((res) => {
			console.log('here get all client ', res);
			this.cours = res;
		});
	}
}
