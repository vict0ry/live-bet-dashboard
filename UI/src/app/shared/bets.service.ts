import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../constants';
import { SharedModule } from './shared.module';
import { Observable } from 'rxjs';
import { IBet } from '../pages/homepage/components/homepage/homepage.models';
import * as socketIo from 'socket.io-client';

@Injectable({
  providedIn: SharedModule
})
export class BetsService {
  private betServiceUrl: string = `${BASE_URL}/bets`;

  constructor(private http: HttpClient) { }

  getBets(): Observable<Array<IBet>> {
    const test = socketIo;
    return this.http.get<Array<IBet>>(this.betServiceUrl);
  }

  getBet(id: number): Observable<IBet> {
    return this.http.get<IBet>(`${this.betServiceUrl}/${id}`);
  }

  startPulling(): Observable<IBet> {
    return this.http.get<IBet>(`${BASE_URL}/pulling/start?rate=1`);
  }

  // getBetsRange(range: number): Observable<Array<IBet>> {
  //   return this.http.get<Array<IBet>>(this.betServiceUrl);
  // }

}
