import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})
export class AutoCompleteComponent {

  public filteredEmployees: object[];

  constructor() {
    this.filteredEmployees = [];
  }

  getResults(results: object[]) {
    this.filteredEmployees = results;
  }

}
