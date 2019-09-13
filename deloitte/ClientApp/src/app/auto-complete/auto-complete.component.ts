import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';


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
