import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from 'src/app/models/Contact';

@Injectable({
	providedIn: 'root'
})
export class ContactService {
	private contactUrl: string;

	private headers = new HttpHeaders().set('content-type', 'application/json').set('Access-Control-Allow-Origin', '*');

	constructor(private httpClient: HttpClient) {
		this.contactUrl = 'http://localhost:3000/Contact';
	}
	addContact(contact) {
		return this.httpClient.post<Contact[]>(this.contactUrl, contact, { headers: this.headers });
	}
	getContactByUserId(userId) {
		return this.httpClient.get<Contact>(`${this.contactUrl}?user=${userId}`);
	}
}
