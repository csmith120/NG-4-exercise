import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchTerms: string[] = [];

  getSearchTerms(): string[] {
    return this.searchTerms;
  }

  addSearchTerm(term: string) {
    this.searchTerms.push(term);
  }
}
