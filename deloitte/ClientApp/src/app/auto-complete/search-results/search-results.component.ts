import { Component, Inject, Input  } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css', '../auto-complete.component.css']
})

export class SearchResultsComponent {

  @Input() filteredEmployees: object[];

  constructor() {
  }

}
