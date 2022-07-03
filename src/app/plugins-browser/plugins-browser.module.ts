import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PluginsBrowserRoutingModule } from './plugins-browser-routing.module';
import { PluginCardComponent } from './components/plugin-card/plugin-card.component';
import { PluginsBrowserComponent } from './plugins-browser.component';
import { SharedModule } from '../shared/shared.module';
import { UserHeaderComponent } from './components/user-header/user-header.component';
import { PluginInfoComponent } from './components/plugin-info/plugin-info.component';


@NgModule({
  declarations: [
    PluginsBrowserComponent,
    PluginCardComponent,
    UserHeaderComponent,
    PluginInfoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PluginsBrowserRoutingModule
  ]
})
export class PluginsBrowserModule { }
