import { Component, Inject, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-auto-complete-search',
  templateUrl: './auto-complete-search.component.html',
  styleUrls: ['./auto-complete-search.component.css', '../auto-complete.component.css'],
  encapsulation : ViewEncapsulation.None,
})

export class AutoCompleteSearchComponent {

  @Output() getResults: EventEmitter<object[]> = new EventEmitter();

  public allEmployees: object[];
  public autoCompleteResults: object[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.autoCompleteResults = [];
    http.get<object[]>(baseUrl + 'api/autocomplete/people').subscribe(result => {
      this.allEmployees = result;
    }, error => console.error(error));
  }

  debounce(func) {
    let timeout;
    return function(...args) {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), 2000);
    };
  }

  onFieldChange(value: string) {
    this.debounce(this.getAutoCompleteResults(value));
  }

  getAutoCompleteResults(query: string) {
    const filterValue = query.toLowerCase();
    if (filterValue.length > 1) {
      this.autoCompleteResults = this.allEmployees.filter(employee => {
        const nameInclude = employee['name'].toLowerCase().includes(filterValue);
        const nameTitleInclude = employee['workTitle'].toLowerCase().includes(filterValue);
        return nameInclude || nameTitleInclude;
      });
    } else {
      this.autoCompleteResults = [];
    }
  }

  onSearch() {
    this.getResults.emit(this.autoCompleteResults);
    this.autoCompleteResults = [];
  }
}
