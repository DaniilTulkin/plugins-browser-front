import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PluginsBrowserRoutingModule } from './plugins-browser-routing.module';
import { PluginsBrowserComponent } from './components/plugins-browser.component';


@NgModule({
  declarations: [
    PluginsBrowserComponent
  ],
  imports: [
    CommonModule,
    PluginsBrowserRoutingModule
  ]
})
export class PluginsBrowserModule { }
