import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'repoCreationDate'
})
export class RepoCreationDatePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
