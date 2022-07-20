import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoutersEnum } from 'src/app/shared/enums/routers.enum';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  routes = RoutersEnum;
  form: FormGroup;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.email, Validators.required]),
      'password': new FormControl(null, [Validators.minLength(6), Validators.required])
    });
  }

  login() {
    const val = this.form.value;
    this.authService.login(val.email, val.password)
      .subscribe({
        next: () => {
          console.log("User is logged in");
          this.router.navigateByUrl(`/${RoutersEnum.PluginsBrowser}`);
        }
      });
  }
}
