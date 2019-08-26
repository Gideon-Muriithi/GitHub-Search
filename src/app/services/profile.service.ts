import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Repo } from '../classes/repo';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username: string;
  private clientid = 'Iv1.9584babc76dba06d';
  private clientsecret = '00b5717c619098aafc0945c76a6030bb31590cd8';
  repos: Repo[] = [];

  constructor(private http: HttpClient) {
    console.log('Service is now ready!');
    this.username = 'Gideon-Muriithi';
  }

//   getProfileRepos(searchTerm: string) {
//     let searchEndpoint = 'https://api.github.com/users/';
//     searchEndpoint += '&q' + searchTerm;
//     let promise =  new Promise((resolve, reject) => {
//         this.http.get(searchEndpoint).toPromise().then(
//           (results) => {
//             this.repos = [];
//             for (let i = 0; i < results['data'].length; i++){
//               let url = results['data'][i]['images']['fixed_height']['url'];
//               let giph = new Giphy(url);
//               this.giphies.push(giph);
//             }
//             console.log(this.giphies);
//             resolve()
//           },
//           (error) => {
//             console.log(error)
//             reject()
//           }
//         )
//     })
//     return promise;
//   }
// }

  getProfileInfo() {
    return this.http.get('https://api.github.com/users/' + environment.SEARCHAPIKEY + this.username + '?client_id=' + this.
   clientid + '&client-secret=' + this.clientsecret);
  }

  getProfileRepos() {
    return this.http.get('https://api.github.com/users/' + environment.SEARCHAPIKEY + this.username + '/repos?client_id=' + this.
    clientid + '&client-secret=' + this.clientsecret);
  }
  updateProfile(username: string) {
    this.username = username;
  }
}

