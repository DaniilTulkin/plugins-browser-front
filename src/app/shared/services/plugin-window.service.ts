import { Injectable } from '@angular/core';
import { EventsEnum } from '../enums/events.enum';

import { WebView2Service } from './webview2.service';

@Injectable({
  providedIn: 'root'
})
export class PluginsWindowService {

  constructor(private wv2Service: WebView2Service) {}

  resizeWindow(className: string) {
    const height = document.getElementsByClassName(className)[0].clientHeight;
    const width = document.getElementsByClassName(className)[0].clientWidth;
    const windowSize = {
        height: height,
        width: width
    }
    
    this.wv2Service.postWebView2Message(EventsEnum.ResizeWindow, windowSize);
  }

  close() {
    this.wv2Service.postWebView2Message(EventsEnum.Close)
  }

  minimize() {
    this.wv2Service.postWebView2Message(EventsEnum.Minimize)
  }
}
