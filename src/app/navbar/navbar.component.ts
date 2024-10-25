import { Component } from '@angular/core';
import { SearchService } from '../search-results.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  searchTerm: string = '';
  searchTerms: string[] = []

  constructor(private searchService: SearchService);

  //adds the the input
  addSearchTerm() {
    if (this.searchTerm.trim()) { // Ensures the term isn't empty
      this.searchService.addSearchTerm(this.searchTerm);
      this.searchTerm = ''; // Clears the input field after adding the term
    }
  }
}
