import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { EventsEnum } from 'src/app/shared/enums/events.enum';
import { WebView2Service } from 'src/app/shared/services/webview2.service';
import { Plugin } from '../../interfaces/plugin.interface';

@Component({
  selector: 'app-plugin-card',
  templateUrl: './plugin-card.component.html',
  styleUrls: ['./plugin-card.component.scss']
})
export class PluginCardComponent {

  @Input() plugin: Plugin;
  @Output() plugingEvent = new EventEmitter<Plugin>();

  constructor(private http: HttpClient,
              private wv2Service: WebView2Service) {}

  runPlugin(pluginName: string) {
    this.http.get(`/api/plugin/${pluginName}`).subscribe((data: any) => {
      const payload = {
        className: pluginName,
        dll: data.bytes
      }
      this.wv2Service.postWebView2Message(EventsEnum.Run, payload);
    });  
  }

  emitPlugin() {
    this.plugingEvent.emit(this.plugin);
  }
}
