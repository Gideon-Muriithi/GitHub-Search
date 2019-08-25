import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search-service/search.service';
import { Users } from '../users';
import { Repos } from '../repos';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  repos: Repos[];
  users: Users[];

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

}
