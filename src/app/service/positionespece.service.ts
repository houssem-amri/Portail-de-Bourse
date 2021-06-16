import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Positionespece } from 'src/app/models/Positionespece';

@Injectable({
  providedIn: 'root'
})
export class PositionespeceService {

  private PositionespeceUrl: string;
  private headers = new HttpHeaders().set('content-type', 'application/json').set('Access-Control-Allow-Origin', '*');

  constructor(private httpClient: HttpClient) {
    this.PositionespeceUrl = 'http://localhost:3000/Positionespece';
  }
  addPositionespece(Positionespece) {
    return this.httpClient.post<Positionespece>(this.PositionespeceUrl, Positionespece, { headers: this.headers });
  }
  getPositionespeceByCashaccountId(cashaccountId) {
    return this.httpClient.get<Positionespece>(`${this.PositionespeceUrl}/?cashaccount=${cashaccountId}`);
  }

}
