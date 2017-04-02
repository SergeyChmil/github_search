import {Component, Output} from '@angular/core';
import {DataService} from "../../services/data.service";
import {Subject} from "rxjs";

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css']
})
export class GitSearchComponent {


  @Output()
  public searchResult: Subject<Info[]> = new Subject<Info[]>();
  @Output()
  public sortingType: string;

  constructor(private _service: DataService) {
  }

  onSearchClick(str: string) {
    this._service.getDataAPI(str)
      .map((response: {items: Info[]}) => response.items)
      .subscribe(res => this.searchResult.next(res))
  }

  onSortClick(arg: string) {
    this.sortingType = arg;
  }

}
