import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Document } from 'src/app/models/Document';

@Injectable({
	providedIn: 'root'
})
export class DocumentService {
	private documentUrl: string;

	private headers = new HttpHeaders().set('content-type', 'application/json').set('Access-Control-Allow-Origin', '*');

	constructor(private httpClient: HttpClient) {
		this.documentUrl = 'http://localhost:3000/Document';
	}
	addDocument(Document) {
		return this.httpClient.post<Document[]>(this.documentUrl, Document, { headers: this.headers });
	}
	getDocumentByUserId(userId) {
		return this.httpClient.get<Document>(`${this.documentUrl}?user=${userId}`);
	}
}
