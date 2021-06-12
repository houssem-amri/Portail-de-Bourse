import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { valeur } from 'src/app/models/valeur';

@Injectable({
  providedIn: 'root'
})
export class ValeurService {

  private ValeurUrl: string;

	private headers = new HttpHeaders().set('content-type', 'application/json').set('Access-Control-Allow-Origin', '*');

	constructor(private httpClient: HttpClient) {
		this.ValeurUrl = 'http://localhost:3000/valeur';
	}
	addValeur(Valeur) {
		return this.httpClient.post<valeur>(this.ValeurUrl, Valeur, { headers: this.headers });
	}
	getAllValeur() {
		return this.httpClient.get<valeur[]>(this.ValeurUrl, { headers: this.headers });
	}
	getValeurById(id: any) {
		return this.httpClient.get<valeur>(`${this.ValeurUrl}/${id}`, { headers: this.headers });
	}
	deleteValeur(id: any) {
		return this.httpClient.delete<valeur>(`${this.ValeurUrl}/${id}`, { headers: this.headers });
	}
}
