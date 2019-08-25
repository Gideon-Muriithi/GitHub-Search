import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Users } from './users';
import {environment} from '../environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProfileRequestService {

  fromURL: string = 'https://api.github.com';
  constructor(private http: HttpClient) {
  }
  getUsers(userName: string): Observable<Users[]> {
    return this.http.get<Users[]>(this.fromURL + '/users/' + userName);
}
}
