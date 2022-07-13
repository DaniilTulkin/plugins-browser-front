import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoutersEnum } from './shared/enums/routers.enum';
import { CollapseClosePanelComponent } from './shared/components/collapse-close-panel/collapse-close-panel.component';
import { PluginsBrowserComponent } from './plugins-browser/plugins-browser.component';
import { RegistrationComponent } from './auth/components/registration/registration.component';

const routes: Routes = [
  {path: "", component: CollapseClosePanelComponent, children: [
    {path: RoutersEnum.PluginsBrowser, component: PluginsBrowserComponent},
    {path: RoutersEnum.Registration, component: RegistrationComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
