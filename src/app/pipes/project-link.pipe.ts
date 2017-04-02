import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'projectLink'
})
export class ProjectLinkPipe implements PipeTransform {

  transform(value: Info): string {
    return "https://github.com/" + value.owner.login + "/" + value.name;
  }

}
