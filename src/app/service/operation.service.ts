import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Operation } from 'src/app/models/Operation';

@Injectable({
	providedIn: 'root'
})
export class OperationService {
	private operationUrl: string;

	private headers = new HttpHeaders().set('content-type', 'application/json').set('Access-Control-Allow-Origin', '*');

	constructor(private httpClient: HttpClient) {
		this.operationUrl = 'http://localhost:3000/Operation';
	}
	addOperation(Operation: any) {
		return this.httpClient.post<Operation>(this.operationUrl, Operation, { headers: this.headers });
	}
	getAllOperation() {
		return this.httpClient.get<Operation[]>(this.operationUrl, { headers: this.headers });
	}
	getOperationById(id: any) {
		return this.httpClient.get<Operation>(`${this.operationUrl}/${id}`, { headers: this.headers });
	}
	deleteOperation(id: any) {
		return this.httpClient.delete<Operation>(`${this.operationUrl}/${id}`, { headers: this.headers });
	}
	getOperationByUserId(userId) {
		return this.httpClient.get<Operation>(`${this.operationUrl}?client=${userId}`);
	}
	getOperationByEtatVente() {
		return this.httpClient.get<Operation[]>(`${this.operationUrl}?etat=achat`);
	}
	getOperationByEtatAchat() {
		return this.httpClient.get<Operation[]>(`${this.operationUrl}?etat=vente`);
	}
	getOperationByUserIdAndEtatVente(userId) {
		return this.httpClient.get<Operation[]>(`${this.operationUrl}?client=${userId}&etat=vente`);
	}
	getOperationByUserIdAndEtatAchat(userId) {
		return this.httpClient.get<Operation[]>(`${this.operationUrl}?client=${userId}&etat=achat`);
	}
}
