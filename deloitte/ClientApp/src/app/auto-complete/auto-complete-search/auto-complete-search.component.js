"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var AutoCompleteSearch = /** @class */ (function () {
    //constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    //  http.get<WeatherForecast[]>(baseUrl + 'api/SampleData/WeatherForecasts').subscribe(result => {
    //    this.forecasts = result;
    //  }, error => console.error(error));
    //}
    function AutoCompleteSearch() {
        var _this = this;
        this.getResults = new core_1.EventEmitter();
        this.txtQueryChanged = new rxjs_1.Subject();
        //need to get from server
        this.allEmployees = employeesData;
        this.autoCompleteResults = [];
        this.txtQueryChanged
            .debounceTime(500)
            .distinctUntilChanged()
            .subscribe(function (model) {
            _this.txtQuery = model;
            _this.getAutoCompleteResults(_this.txtQuery);
        });
    }
    AutoCompleteSearch.prototype.onFieldChange = function (value) {
        this.txtQueryChanged.next(value);
    };
    AutoCompleteSearch.prototype.getAutoCompleteResults = function (value) {
        var filterValue = value.toLowerCase();
        if (filterValue.length > 1) {
            this.autoCompleteResults = this.allEmployees.filter(function (employee) {
                var nameInclude = employee["name"].toLowerCase().includes(filterValue);
                var nameTitleInclude = employee["workTitle"].toLowerCase().includes(filterValue);
                return nameInclude || nameTitleInclude;
            });
        }
        else {
            this.autoCompleteResults = [];
        }
    };
    AutoCompleteSearch.prototype.onSearch = function () {
        this.getResults.emit(this.autoCompleteResults);
        this.autoCompleteResults = [];
    };
    __decorate([
        core_1.Output()
    ], AutoCompleteSearch.prototype, "getResults", void 0);
    AutoCompleteSearch = __decorate([
        core_1.Component({
            selector: 'app-auto-complete-search',
            templateUrl: './auto-complete-search.component.html',
            styleUrls: ['./auto-complete-search.component.css', '../auto-complete.component.css']
        })
    ], AutoCompleteSearch);
    return AutoCompleteSearch;
}());
exports.AutoCompleteSearch = AutoCompleteSearch;
var employeesData = [
    {
        ImageUrl: '../../assets/images/deloitteImg/Jack_Sparrow.jpg',
        workTitle: 'Manager',
        name: 'Captain Jack Sparrow'
    },
    {
        ImageUrl: '../../assets/images/deloitteImg/The_Joker.jpg',
        workTitle: 'Team Leader',
        name: 'The Joker'
    },
    {
        ImageUrl: '../../assets/images/deloitteImg/Gandalf.jpg',
        workTitle: 'CEO',
        name: 'Gandalf'
    },
    {
        ImageUrl: '../../assets/images/deloitteImg/Ariel.jpg',
        workTitle: 'Administrative Director',
        name: 'Ariel'
    },
    {
        ImageUrl: '../../assets/images/deloitteImg/Agent_J.jpg',
        workTitle: 'Administrative',
        name: 'Agent J'
    },
    {
        ImageUrl: '../../assets/images/deloitteImg/Captian_America.jpg',
        workTitle: 'Team Leader',
        name: 'Captain America'
    },
    {
        ImageUrl: '../../assets/images/deloitteImg/The_Bride.jpg',
        workTitle: 'Legal Secretary',
        name: 'The Bride'
    },
    {
        ImageUrl: '../../assets/images/deloitteImg/Cinderella.jpg',
        workTitle: 'Direct Salesperson',
        name: 'Cinderella'
    },
    {
        ImageUrl: '../../assets/images/deloitteImg/Zoolander.jpg',
        workTitle: 'Mailroom Personnel',
        name: 'Zoolander'
    },
    {
        ImageUrl: '../../assets/images/deloitteImg/Dorothy.jpg',
        workTitle: 'Buyer',
        name: 'Dorothy'
    },
    {
        ImageUrl: '../../assets/images/deloitteImg/Ghostface.jpg',
        workTitle: 'Buyer',
        name: 'Ghostface'
    },
    {
        ImageUrl: '../../assets/images/deloitteImg/Darth_Vader.jpg',
        workTitle: 'FrontEnd Developer',
        name: 'Darth Vader'
    }
];
//# sourceMappingURL=auto-complete-search.component.js.map
