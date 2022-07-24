import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay, tap } from 'rxjs/operators'
import { RoutersEnum } from 'src/app/shared/enums/routers.enum';
import { TokenService } from 'src/app/shared/services/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
              private tokenService: TokenService) { }

  login(email:string, password:string ) {
    return this.http.post(`/api/auth/${RoutersEnum.Login}`, {email, password}).pipe(
      tap((res: any) => {
        this.tokenService.saveToken(res.token);
        this.tokenService.saveUser(res.user);
      })
    )
  }

  register(login: string, email:string, password:string ) {
    return this.http.post(`/api/auth/${RoutersEnum.Registration}`, {login, email, password});
  }

  logout(): void {
    this.tokenService.clearStorage();
    window.location.reload();
  }
}
