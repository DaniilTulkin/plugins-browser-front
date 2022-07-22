import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../shared/guards/auth.guard';
import { PluginsBrowserComponent } from './plugins-browser.component';

const routes: Routes = [
  {path: '', component: PluginsBrowserComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PluginsBrowserRoutingModule { }
