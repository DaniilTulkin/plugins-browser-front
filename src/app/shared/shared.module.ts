import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollapseClosePanelComponent } from './components/collapse-close-panel/collapse-close-panel.component';
import { WebView2Service } from './services/webview2.service';
import { PluginsService } from './services/plugins.service';
import { LineChartModule } from './modules/charts/line-chart/line-chart.module';



@NgModule({
  declarations: [
    CollapseClosePanelComponent,
  ],
  providers: [
    WebView2Service,
    PluginsService
  ],
  imports: [
    CommonModule,
    LineChartModule
  ],
  exports: [
    CollapseClosePanelComponent,
    LineChartModule
  ]
})
export class SharedModule { }
