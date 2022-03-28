import { Injectable } from '@angular/core';
import { User, UserStatus } from '../models/user.models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }

  users: User[] = [
    {
      firstName: 'eddie',
      lastName: 'vedder',
      about: 'singer',
      birthDate: new Date(1964, 11, 23).toISOString(),
      status: UserStatus.active
    },
    {
      firstName: 'freddie',
      lastName: 'mercury',
      about: 'singer',
      birthDate: new Date(1946, 8, 5).toISOString(),
      status: UserStatus.deleted
    },
    {
      firstName: 'daniel',
      lastName: 'day-lewis',
      about: 'actor',
      birthDate: new Date(1957, 3, 29).toISOString(),
      status: UserStatus.inactive
    },
    {
      firstName: 'arundhati',
      lastName: 'roy',
      about: 'writer',
      birthDate: new Date(1959, 10, 24).toISOString(),
      status: UserStatus.active
    },
  ]

  getUserData(): Promise<User[]> {
    return new Promise((resolve) => {
      return resolve (this.users)
    });
  }

}
