import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoutersEnum } from '../shared/enums/routers.enum';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';

const routes: Routes = [
  {path: "", component: AuthLayoutComponent, children: [
    {path: RoutersEnum.Login, component: LoginComponent},
    {path: RoutersEnum.Registration, component: RegistrationComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
