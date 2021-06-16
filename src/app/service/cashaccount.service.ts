import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cashaccount } from 'src/app/models/Cashaccount';

@Injectable({
	providedIn: 'root'
})
export class CashaccountService {
	private cashaccountUrl: string;

	private headers = new HttpHeaders().set('content-type', 'application/json').set('Access-Control-Allow-Origin', '*');
	constructor(private httpClient: HttpClient) {
		this.cashaccountUrl = 'http://localhost:3000/Cashaccount';
	}
	addCashaccount(Cashaccount) {
		return this.httpClient.post<Cashaccount[]>(this.cashaccountUrl, Cashaccount, { headers: this.headers });
	}
	updateCashaccount(Cashaccount) {
		return this.httpClient.put<Cashaccount[]>(`${this.cashaccountUrl}/${Cashaccount.id}`, Cashaccount, { headers: this.headers });
	}
	getCashaccountByUserId(userId) {
		return this.httpClient.get<Cashaccount>(`${this.cashaccountUrl}?user=${userId}`);
	}
	getCashaccountById(id) {
		return this.httpClient.get<Cashaccount>(`${this.cashaccountUrl}/${id}`);
	}
}
