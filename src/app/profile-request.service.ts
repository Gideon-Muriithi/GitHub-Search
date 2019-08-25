import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Users } from './users';
import {environment} from '../environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProfileRequestService {

  fromURL: string = 'https://api.github.com/users/daneden?access_token=' + environment. SEARCHAPIKEY;
  constructor(private http: HttpClient) {
  }
  getUsers(userName: string): Observable<Users[]> {
    return this.http.get<Users[]>(this.fromURL + '/users/' + userName);
}

}
