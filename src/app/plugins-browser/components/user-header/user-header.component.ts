import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { TokenService } from 'src/app/shared/services/token.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss']
})
export class UserHeaderComponent {

  constructor(public authService: AuthService,
              public tokenService: TokenService) { }
}
