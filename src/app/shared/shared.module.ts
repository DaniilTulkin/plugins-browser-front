import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebView2Service } from './services/webview2.service';
import { PluginsService } from './services/plugins.service';
import { LineChartModule } from './modules/charts/line-chart/line-chart.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule } from './buttons/buttons.module';



@NgModule({
  providers: [
    WebView2Service,
    PluginsService
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LineChartModule,
    ButtonsModule
  ]
})
export class SharedModule { }
