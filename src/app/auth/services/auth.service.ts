import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs/operators'
import { RoutersEnum } from 'src/app/shared/enums/routers.enum';

import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email:string, password:string ) {
    return this.http.post(`/api/auth/${RoutersEnum.Login}`, {email, password})
    .pipe(shareReplay());
  }

  register(email:string, password:string ) {
    return this.http.post(`/api/auth/${RoutersEnum.Registration}`, {email, password})
    .pipe(shareReplay());
  }
}
