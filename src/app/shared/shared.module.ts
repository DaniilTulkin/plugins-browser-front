import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollapseClosePanelComponent } from './components/collapse-close-panel/collapse-close-panel.component';
import { WebView2Service } from './services/webview2.service';
import { PluginsService } from './services/plugins.service';
import { LineChartModule } from './modules/charts/line-chart/line-chart.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
  ],
  providers: [
    WebView2Service,
    PluginsService
  ],
  exports: [
    CommonModule,
    FormsModule,
    LineChartModule,
  ]
})
export class SharedModule { }
