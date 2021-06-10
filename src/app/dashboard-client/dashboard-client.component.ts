import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { valeur } from '../models/valeur';
import { PositionTitreService } from '../service/position-titre.service';
@Component({
	selector: 'app-dashboard-client',
	templateUrl: './dashboard-client.component.html',
	styleUrls: [ './dashboard-client.component.css' ]
})
export class DashboardClientComponent implements OnInit {
	cours: valeur[];
	constructor(private positionTitreService: PositionTitreService, private router: Router) {}

	ngOnInit() {
		this.getAllPositiontitre();
	}
	getAllPositiontitre() {
		this.positionTitreService.getAllPositiontitre().subscribe((res) => {
			console.log('here get all client ', res);
			this.cours = res;
		});
	}
	addValeur(id) {
		this.router.navigate([ `add-ordres/${id}` ]);
	}
}
