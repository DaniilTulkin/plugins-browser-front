import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PluginsBrowserComponent } from './plugins-browser/components/plugins-browser.component';

import { RoutersEnum } from './shared/enums/routers.anum';

const routes: Routes = [
  {path: RoutersEnum.PluginsBrowser, component: PluginsBrowserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
