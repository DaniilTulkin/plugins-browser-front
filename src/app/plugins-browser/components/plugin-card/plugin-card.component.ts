import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Plugin } from '../../interfaces/plugin.interface';

@Component({
  selector: 'app-plugin-card',
  templateUrl: './plugin-card.component.html',
  styleUrls: ['./plugin-card.component.scss']
})
export class PluginCardComponent {

  @Input() plugin: Plugin;
  @Output() plugingEvent = new EventEmitter<Plugin>();

  emitPlugin() {
    this.plugingEvent.emit(this.plugin);
  }
}
