import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { valeur } from 'src/app/models/valeur';

@Injectable({
	providedIn: 'root'
})
export class PositionTitreService {
	private positionTitreUrl: string;

	private headers = new HttpHeaders().set('content-type', 'application/json').set('Access-Control-Allow-Origin', '*');

	constructor(private httpClient: HttpClient) {
		this.positionTitreUrl = 'http://localhost:3000/Positiontitre';
	}
	addPositionTitre(positionTitre) {
		return this.httpClient.post<valeur>(this.positionTitreUrl, positionTitre, { headers: this.headers });
	}
	getAllPositiontitre() {
		return this.httpClient.get<valeur[]>(this.positionTitreUrl, { headers: this.headers });
	}
	getPositiontitreById(id: any) {
		return this.httpClient.get<valeur>(`${this.positionTitreUrl}/${id}`, { headers: this.headers });
	}
	deletePositiontitre(id: any) {
		return this.httpClient.delete<valeur>(`${this.positionTitreUrl}/${id}`, { headers: this.headers });
	}
}
