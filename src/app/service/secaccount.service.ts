import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Secaccount } from 'src/app/models/Secaccount';

@Injectable({
	providedIn: 'root'
})
export class SecaccountService {
	private SecaccountUrl: string;

	private headers = new HttpHeaders().set('content-type', 'application/json').set('Access-Control-Allow-Origin', '*');
	constructor(private httpClient: HttpClient) {
		this.SecaccountUrl = 'http://localhost:3000/Secaccount';
	}
	addSecaccount(Secaccount) {
		return this.httpClient.post<Secaccount[]>(this.SecaccountUrl, Secaccount, { headers: this.headers });
	}
	getSecaccountByUserId(userId) {
		return this.httpClient.get<Secaccount>(`${this.SecaccountUrl}/?user=${userId}`);
	}
}
