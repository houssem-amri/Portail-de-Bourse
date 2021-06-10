import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PositionTitreService } from 'src/app/service/position-titre.service';
import { valeur } from '../../models/valeur';

@Component({
	selector: 'app-ajouter-titre',
	templateUrl: './ajouter-titre.component.html',
	styleUrls: [ './ajouter-titre.component.css' ]
})
export class AjouterTitreComponent implements OnInit {
	addCoursForm: FormGroup;

	cours: valeur;
	constructor(private formBuilder: FormBuilder, private positionTitreService: PositionTitreService) {
		this.cours = new valeur();
	}

	ngOnInit() {
		this.addCoursForm = this.formBuilder.group({
			securitynature: [ '' ],
			securitymarket: [ '' ],
			name: [ '' ],
			currency: [ '' ],
			issuer: [ '' ],
			depositary: [ '' ],
			garantor: [ '' ],
			nominalamount: [ '' ]
		});
	}
	addCours() {
		this.positionTitreService.addPositionTitre(this.cours).subscribe((data) => {
			console.log('here add client', data);
		});
	}
}
