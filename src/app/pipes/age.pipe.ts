import { Pipe, PipeTransform } from '@angular/core';
import { differenceInYears } from 'date-fns';
import { User } from '../models/user.models';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: string): string {
   return `${differenceInYears(new Date(), new Date(value))} years old`
  }

}
