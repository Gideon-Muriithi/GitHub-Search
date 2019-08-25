import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search-service/search.service';
import { Users } from '../users';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  users: Users[];
  constructor(public searchService: searchService) { }

  ngOnInit() {
    this.searchUsers(' ');
  }

  searchGiphy(searchTerm) {
    this.searchService.searchUsers(searchTerm).then(
      () => {
        this.users = this.searchService.users;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
