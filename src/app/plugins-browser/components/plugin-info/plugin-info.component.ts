import { Component, Input, OnInit } from '@angular/core';
import { Plugin } from '../../interfaces/plugin.interface';

@Component({
  selector: 'app-plugin-info',
  templateUrl: './plugin-info.component.html',
  styleUrls: ['./plugin-info.component.scss']
})
export class PluginInfoComponent {

  @Input() plugin: Plugin;

  onSubmit() {
    
  }
}
