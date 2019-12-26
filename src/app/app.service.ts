import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AppService {

  authenticated = false;
  constructor() { }

  authenticate(credentials, callback) {
    if (credentials && credentials.username === 'user' && credentials.password === 'password') {
      this.authenticated = true;
    } else {
      this.authenticated = false;
    }
    return callback && callback();
  }

}
