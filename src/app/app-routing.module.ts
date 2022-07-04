import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PluginsBrowserComponent } from './plugins-browser/plugins-browser.component';
import { CollapseClosePanelComponent } from './shared/components/collapse-close-panel/collapse-close-panel.component';
import { RoutersEnum } from './shared/enums/routers.enum';

const routes: Routes = [
  {path: "", component: CollapseClosePanelComponent, children: [
    {path: RoutersEnum.PluginsBrowser, component: PluginsBrowserComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
