import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoutersEnum } from '../shared/enums/routers.anum';
import { PluginsBrowserComponent } from './plugins-browser.component';

const routes: Routes = [
  {path: RoutersEnum.PluginsBrowser, component: PluginsBrowserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PluginsBrowserRoutingModule { }
