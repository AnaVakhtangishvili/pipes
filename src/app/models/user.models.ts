export interface User {
  firstName: string;
  lastName: string;
  about: string;
  birthDate: string;
  status: UserStatus;
}

export enum UserStatus {
  deleted = 'gone, but not forgotten',
  active = 'Active',
  inactive = 'Inactive',
}
