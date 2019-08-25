import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Users } from '../users';
import { Repos } from '../repos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  users: Users[] = [];
  repos: Repos[] = [];

  // tslint:disable-next-line:no-inferrable-types
  baseURL: string = 'https://api.github.com';
  constructor(private http: HttpClient) {
  }

  getRepos(userName: string): Observable<Repos[]> {
       return this.http.get<Repos[]>(this.baseURL + '/users/' + userName + '/repos');
  }
}
//   getRepos(userName: string): Observable<Repos[]> {
//     return this.http.get<Repos[]>(this.baseURL + '/users/' + userName + '/repos');
// }
// }
