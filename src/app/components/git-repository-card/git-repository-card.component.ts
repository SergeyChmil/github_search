import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-git-repository-card',
  templateUrl: './git-repository-card.component.html',
  styleUrls: ['./git-repository-card.component.css']
})
export class GitRepositoryCardComponent {

  @Input()
  public data:Info;

}
