import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-search-result-list',
  templateUrl: './search-result-list.component.html',
  styleUrls: ['./search-result-list.component.css']
})
export class SearchResultListComponent{

  @Input()
  public searchResult:Info[];
  @Input()
  public sortingType:string;

}
