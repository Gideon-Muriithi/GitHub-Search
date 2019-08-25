import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search-service/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  repos: repos[];
  users: user[];

  constructor() { }

  ngOnInit() {
  }

}
