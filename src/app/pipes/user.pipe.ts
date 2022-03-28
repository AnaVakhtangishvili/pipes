import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user.models';

@Pipe({
  name: 'userNmes'
})
export class UserPipe implements PipeTransform {

  transform(userData: User[]): string {
    return userData.map(element => element.firstName).join(', ');
  }
}
