import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ValeurService } from 'src/app/service/valeur.service';
import { valeur } from '../../models/valeur';

@Component({
	selector: 'app-ajouter-titre',
	templateUrl: './ajouter-titre.component.html',
	styleUrls: [ './ajouter-titre.component.css' ]
})
export class AjouterTitreComponent implements OnInit {
	addCoursForm: FormGroup;

	cours: valeur;
	constructor(private formBuilder: FormBuilder, private valeurService: ValeurService , private router:Router) {
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
			nominalamount: [ '' ],
			withholdingtax: [ '' ],
	        rated: [ '' ],
	        issuedate: [ '' ]
		});
	}
	addCours() {
		this.valeurService.addValeur(this.cours).subscribe((data) => {
			console.log('here add valeyr', data);
		});
		this.router.navigate(['dashboard'])
	}
}
