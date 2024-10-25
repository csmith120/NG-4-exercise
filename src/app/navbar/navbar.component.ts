import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  searchTerm: string = '';
  searchTerms: string[] = []

  //adds the the input
  addSearchTerm() {
    if (this.searchTerm.trim()) { // Ensures the term isn't empty
      this.searchTerms.push(this.searchTerm);
      this.searchTerm = ''; // Clears the input field after adding the term
    }
  }
}
