import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoutersEnum } from './shared/enums/routers.enum';
import { CollapseClosePanelComponent } from './shared/components/collapse-close-panel/collapse-close-panel.component';

const routes: Routes = [
  {path: "", component: CollapseClosePanelComponent, children: [
    {path: "", redirectTo: RoutersEnum.PluginsBrowser, pathMatch: 'full'},
    {
      path: RoutersEnum.PluginsBrowser,
      loadChildren: () => import('./plugins-browser/plugins-browser.module').then(m => m.PluginsBrowserModule)
    },
    {
      path: RoutersEnum.Auth,
      loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    }
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
