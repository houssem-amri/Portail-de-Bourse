import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ordre } from 'src/app/models/ordre';

@Injectable({
	providedIn: 'root'
})
export class OrdreService {
	private ordreUrl: string;

	private headers = new HttpHeaders().set('content-type', 'application/json').set('Access-Control-Allow-Origin', '*');

	constructor(private httpClient: HttpClient) {
		this.ordreUrl = 'http://localhost:3000/Ordre';
	}
	addOrdre(ordre) {
		return this.httpClient.post<Ordre[]>(this.ordreUrl, ordre, { headers: this.headers });
	}
	getAllOrdre() {
		return this.httpClient.get<Ordre[]>(`${this.ordreUrl}/?test=false`, { headers: this.headers });
	}
	getAllHistoryOrdre() {
		return this.httpClient.get<Ordre[]>(`${this.ordreUrl}/?test=true`, { headers: this.headers });
	}
	getOrdreById(id: any) {
		return this.httpClient.get<Ordre>(`${this.ordreUrl}/${id}`, { headers: this.headers });
	}
	deleteOrdre(id: any) {
		return this.httpClient.delete<Ordre[]>(`${this.ordreUrl}/${id}`, { headers: this.headers });
	}
	updateOrdre(order: any) {
		return this.httpClient.put<Ordre[]>(`${this.ordreUrl}/${order.id}`, order, { headers: this.headers });
	}
	getOrdresByIdClient(id: any) {
		return this.httpClient.get<Ordre[]>(`${this.ordreUrl}/?client=${id}&test=false`, { headers: this.headers });
	}
}
