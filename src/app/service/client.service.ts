import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from 'src/app/models/client';

@Injectable({
	providedIn: 'root'
})
export class ClientService {
	private clientUrl: string;

	private headers = new HttpHeaders().set('content-type', 'application/json').set('Access-Control-Allow-Origin', '*');

	constructor(private httpClient: HttpClient) {
		this.clientUrl = 'http://localhost:3000/Client';
	}
	addClient(client) {
		return this.httpClient.post<Client[]>(this.clientUrl, client, { headers: this.headers });
	}
	getAllClient() {
		return this.httpClient.get<Client[]>(this.clientUrl, { headers: this.headers });
	}
	deleteClient(id: any) {
		return this.httpClient.delete<Client[]>(`${this.clientUrl}/${id}`, { headers: this.headers });
	}
	getClientById(id: any) {
		return this.httpClient.get<Client[]>(`${this.clientUrl}/${id}`, { headers: this.headers });
	}
}
