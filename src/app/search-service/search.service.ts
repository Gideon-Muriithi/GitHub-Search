import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Repos } from '../repos';
import { Observable } from 'rxjs';

@Injectable()
export class  {
  repos: Repos[] = [];

  // tslint:disable-next-line:no-inferrable-types
  baseURL: string = 'https://api.github.com/users/daneden?access_token=' + environment. SEARCHAPIKEY;
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
