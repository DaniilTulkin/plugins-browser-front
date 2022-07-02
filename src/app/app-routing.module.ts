import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PluginsBrowserComponent } from './plugins-browser/plugins-browser.component';

import { RoutersEnum } from './shared/enums/routers.enum';

const routes: Routes = [
  {path: RoutersEnum.PluginsBrowser, component: PluginsBrowserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
