import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoutersEnum } from '../shared/enums/routers.enum';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';

const routes: Routes = [
  {path: '', component: AuthComponent, children: [
    {path: '', redirectTo: RoutersEnum.Login, pathMatch: 'full'},
    {path: RoutersEnum.Login, component: LoginComponent},
    {path: RoutersEnum.Registration, component: RegistrationComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
