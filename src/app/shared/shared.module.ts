import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollapseClosePanelComponent } from './components/collapse-close-panel/collapse-close-panel.component';
import { WebView2Service } from './services/webview2.service';
import { PluginsService } from './services/plugins.service';



@NgModule({
  declarations: [
    CollapseClosePanelComponent
  ],
  providers: [
    WebView2Service,
    PluginsService
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CollapseClosePanelComponent
  ]
})
export class SharedModule { }
