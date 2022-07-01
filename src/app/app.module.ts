import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PluginsBrowserModule } from './plugins-browser/plugins-browser.module';
import { PluginsService } from './shared/services/plugins.service';
import { WebView2Service } from './shared/services/webview2.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PluginsBrowserModule
  ],
  providers: [
    WebView2Service,
    PluginsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
