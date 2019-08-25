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
  baseURL = 'https://api.github.com';

  constructor(private http: HttpClient) { }
  searchGiphies(searchTerm: string) {

    let searchEndpoint = 'https://api.github.com/users/gideon-muriithi?access_token=' + environment.SEARCHAPIKEY;
    searchEndpoint += '&q=' + searchTerm;
    let promise =  new Promise((resolve, reject) => {
        this.http.get(searchEndpoint).toPromise().then(
          (results) => {
            this.repos = [];
            for (let i = 0; i < results['data'].length; i++) {
              let url = results["data"][i]["images"]["fixed_height"]["url"];
              let repos = new Repos(url);
              this.repos.push(repo);
            }
            console.log(this.repos);
            resolve();
          },
          (error) => {
            console.log(error);
            reject();
          }
        );
    });
    return promise;
  }
}
//   getRepos(userName: string): Observable<Repos[]> {
//     return this.http.get<Repos[]>(this.baseURL + '/users/' + userName + '/repos');
// }
// }
