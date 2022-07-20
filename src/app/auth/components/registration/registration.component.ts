import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { RoutersEnum } from 'src/app/shared/enums/routers.enum';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

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

  register() {
    const val = this.form.value;
    this.authService.register(val.email, val.password)
      .subscribe({
        next: (res: any) => {
          console.log(res.message);
          this.router.navigateByUrl(`/${RoutersEnum.Login}`);
        }
      });
  }
}
