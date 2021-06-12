import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { valeur } from '../models/valeur';
import { ValeurService } from '../service/valeur.service';
@Component({
	selector: 'app-dashboard-client',
	templateUrl: './dashboard-client.component.html',
	styleUrls: [ './dashboard-client.component.css' ]
})
export class DashboardClientComponent implements OnInit {
	valeur: valeur[];
	constructor(private valeurService: ValeurService, private router: Router) {}

	ngOnInit() {
		this.getAllPositiontitre();
	}
	getAllPositiontitre() {
		this.valeurService.getAllValeur().subscribe((res) => {
			console.log('here get all valeur ', res);
			this.valeur = res;
		});
	}
	addValeur(id) {
		this.router.navigate([ `add-ordres/${id}` ]);
	}
}
