import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username: string;
  private clientid = 'Iv1.9584babc76dba06d';
  private clientsecret = '00b5717c619098aafc0945c76a6030bb31590cd8';

  constructor(private http: HttpClient) {
    console.log('Service is now ready!');
    this.username = 'Gideon-Muriithi';
  }

  getProfileInfo() {
    return this.http.get('https://api.github.com/users/' + this.username + '?client_id=' + this.
   clientid + '&client-secret=' + this.clientsecret);
  }

  getProfileRepos() {
    return this.http.get('https://api.github.com/users/' + this.username + '/repos?client_id=' + this.
    clientid + '&client-secret=' + this.clientsecret);
  }
  updateProfile(username: string) {
    this.username = username;
  }
}

