import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Users } from '../users';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  users: Users[] = [];

  constructor(private http: HttpClient) { }
}
