import { Injectable } from '@angular/core';
import { SharedModule } from './shared.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';
import { environment } from '../../environments/environment';
import Socket = SocketIOClient.Socket;
import { IBet } from '../pages/homepage/components/homepage/homepage.models';

@Injectable({
  providedIn: SharedModule
})
export class BetsSocket {
  private socket: Socket;

  constructor(private http: HttpClient) { }

  connect(): Observable<Array<IBet>> {
    this.socket = io(environment.apiUrl);
    return new Observable(observer => {
      this.socket.on('bet-updated', (data) => {
        // console.log('recieved message: ', data);
        observer.next(data);
      });
    });
  }
}
