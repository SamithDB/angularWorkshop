import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  authorize() {
    return Promise.resolve(false);
  }
}
