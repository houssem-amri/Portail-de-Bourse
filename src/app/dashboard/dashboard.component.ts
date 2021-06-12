import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { valeur } from '../models/valeur';
import { ValeurService } from '../service/valeur.service';
@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: [ './dashboard.component.scss' ],
	encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
	valeur: valeur[];
	constructor(private valeurService: ValeurService) {}

	ngOnInit() {
		this.getAllPositiontitre();
	}
	getAllPositiontitre() {
		this.valeurService.getAllValeur().subscribe((res) => {
			console.log('here get all valeur ', res);
			this.valeur = res;
		});
	}
}
