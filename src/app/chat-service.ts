import { Injectable } from '@angular/core';
import { Message } from './message';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ChatService {
  private uri = 'http://localhost:8080/chat/messages';

  private ourObservable: Observable<any>;

  constructor(private http: Http) {

  }
  getMessages(): Observable<any> {
    return this.http.get(this.uri).map((response:Response) => response.json());
  }
  addMessage(input:string) {
    let newMessage:Message = new Message(input);
    console.log("addMessage from ChatService");
    this.http.post(this.uri,JSON.parse(JSON.stringify(newMessage))).subscribe((response:Response) => response);
  }
}
