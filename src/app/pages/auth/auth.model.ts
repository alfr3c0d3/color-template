export class RegistrationUser {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  roles: string[];
}

export class User {
  email: string;
  givenName: string;
  roles: string[];

  pictureUrl: string;
}

export class UserInfo {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  roles: string[];

  pictureUrl: string;
}
