import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { GitSearchComponent } from './components/git-search/git-search.component';
import {DataService} from "./services/data.service";
import { SearchResultListComponent } from './components/search-result-list/search-result-list.component';
import { GitRepositoryCardComponent } from './components/git-repository-card/git-repository-card.component';
import { ProjectLinkPipe } from './pipes/project-link.pipe';
import { SortPipe } from './pipes/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GitSearchComponent,
    SearchResultListComponent,
    GitRepositoryCardComponent,
    ProjectLinkPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
