import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { SearchService } from '../search-results.service';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css'
})
export class SearchResultsComponent implements OnInit {
  searchTerms!: string[];

  constructor(private searchService: SearchService) {}

  ngOnInit() {
    this.searchTerms = this.searchService.getSearchTerms();
  }
}
