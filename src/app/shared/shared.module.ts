import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { WebView2Service } from './services/webview2.service';
import { PluginsWindowService } from './services/plugin-window.service';
import { LineChartModule } from './modules/charts/line-chart/line-chart.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule } from './buttons/buttons.module';



@NgModule({
  providers: [
    WebView2Service,
    PluginsWindowService
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LineChartModule,
    ButtonsModule
  ]
})
export class SharedModule { }
