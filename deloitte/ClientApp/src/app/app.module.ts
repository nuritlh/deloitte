import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HighlightSearchPipe } from './highlight-search/highlight-search.pipe';

import { AppComponent } from './app.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { SearchResultsComponent } from './auto-complete/search-results/search-results.component';
import { AutoCompleteSearchComponent } from './auto-complete/auto-complete-search/auto-complete-search.component';


@NgModule({
  declarations: [
    AppComponent,
    AutoCompleteComponent,
    SearchResultsComponent,
    AutoCompleteSearchComponent,
    HighlightSearchPipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
