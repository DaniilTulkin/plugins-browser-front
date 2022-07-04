import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { PluginsBrowserModule } from './plugins-browser/plugins-browser.module';
import { CollapseClosePanelComponent } from './shared/components/collapse-close-panel/collapse-close-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    CollapseClosePanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PluginsBrowserModule,
    AuthModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
