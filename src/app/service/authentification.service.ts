import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Authentification } from 'src/app/models/auth';

@Injectable({
	providedIn: 'root'
})
export class AuthentificationService {
	authUrl = 'http://localhost:3000/Authentification';
	constructor(private httpClient: HttpClient) {}
	addAuth(auth) {
		return this.httpClient.post<Authentification[]>(this.authUrl, auth);
	}
	getAuth() {
		return this.httpClient.get<Authentification[]>(this.authUrl);
	}
	login(auth) {
		return this.httpClient.post<Authentification[]>(this.authUrl, auth).subscribe((res) => {
			console.log(res);
		});
	}
	getAuthByUserId(userId) {
		return this.httpClient.get<Authentification>(`${this.authUrl}?user=${userId}`);
	}
}
