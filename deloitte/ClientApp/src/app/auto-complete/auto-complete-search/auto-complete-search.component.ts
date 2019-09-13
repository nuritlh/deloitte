import { Component, Inject, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
// import { Subject } from "rxjs";
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-auto-complete-search',
  templateUrl: './auto-complete-search.component.html',
  styleUrls: ['./auto-complete-search.component.css', '../auto-complete.component.css'],
  providers: [],
  encapsulation : ViewEncapsulation.None,
})

export class AutoCompleteSearchComponent {

  @Output() getResults: EventEmitter<object[]> = new EventEmitter();

  public allEmployees: object[];
  public autoCompleteResults: object[];
  private debouncedGetAutocomplete: Function;

  //constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
  //  http.get<WeatherForecast[]>(baseUrl + 'api/SampleData/WeatherForecasts').subscribe(result => {

  //    this.forecasts = result;
  //  }, error => console.error(error));
  //}

  constructor() {
    this.allEmployees = employeesData;
    this.autoCompleteResults = [];
    this.debouncedGetAutocomplete = this.debounce(this.getAutoCompleteResults);
  }

  debounce(func) {
    let timeout;
    return function(...args) {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), 400);
    };
  }

  onFieldChange(value: string) {
    this.debouncedGetAutocomplete(value);
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


interface employee {
  imageUrl: string;
  workTitle: string;
  name: string;
}

const employeesData: employee[] = [
  {
    imageUrl: '../../assets/images/deloitteImg/Jack_Sparrow.jpg',
    workTitle: 'Manager',
    name: 'Captain Jack Sparrow'
  },
  {
    imageUrl: '../../assets/images/deloitteImg/The_Joker.jpg',
    workTitle: 'Team Leader',
    name: 'The Joker'
  },
  {
    imageUrl: '../../assets/images/deloitteImg/Gandalf.jpg',
    workTitle: 'CEO',
    name: 'Gandalf'
  },
  {
    imageUrl: '../../assets/images/deloitteImg/Ariel.jpg',
    workTitle: 'Administrative Director',
    name: 'Ariel'
  },
  {
    imageUrl: '../../assets/images/deloitteImg/Agent_J.jpg',
    workTitle: 'Administrative',
    name: 'Agent J'
  },
  {
    imageUrl: '../../assets/images/deloitteImg/Captian_America.jpg',
    workTitle: 'Team Leader',
    name: 'Captain America'
  },
  {
    imageUrl: '../../assets/images/deloitteImg/The_Bride.jpg',
    workTitle: 'Legal Secretary',
    name: 'The Bride'
  },
  {
    imageUrl: '../../assets/images/deloitteImg/Cinderella.jpg',
    workTitle: 'Direct Salesperson',
    name: 'Cinderella'
  },
  {
    imageUrl: '../../assets/images/deloitteImg/Zoolander.jpg',
    workTitle: 'Mailroom Personnel',
    name: 'Zoolander'
  },
  {
    imageUrl: '../../assets/images/deloitteImg/Dorothy.jpg',
    workTitle: 'Buyer',
    name: 'Dorothy'
  },
  {
    imageUrl: '../../assets/images/deloitteImg/Ghostface.jpg',
    workTitle: 'Buyer',
    name: 'Ghostface'
  },
  {
    imageUrl: '../../assets/images/deloitteImg/Darth_Vader.jpg',
    workTitle: 'FrontEnd Developer',
    name: 'Darth Vader'
  }
]
