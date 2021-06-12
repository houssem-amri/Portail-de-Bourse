import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Positiontitre } from 'src/app/models/positionTitre';

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
		return this.httpClient.post<Positiontitre>(this.positionTitreUrl, positionTitre, { headers: this.headers });
	}
	getAllPositiontitre() {
		return this.httpClient.get<Positiontitre[]>(this.positionTitreUrl, { headers: this.headers });
	}
	getPositiontitreById(id: any) {
		return this.httpClient.get<Positiontitre>(`${this.positionTitreUrl}/${id}`, { headers: this.headers });
	}
	deletePositiontitre(id: any) {
		return this.httpClient.delete<Positiontitre>(`${this.positionTitreUrl}/${id}`, { headers: this.headers });
	}
	getPositiontitreBySecaccountId(secaccountId) {
		return this.httpClient.get<Positiontitre>(`${this.positionTitreUrl}/?secaccount=${secaccountId}`);
	}
}
