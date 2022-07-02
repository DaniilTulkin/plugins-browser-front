import { Component, Input, OnInit } from '@angular/core';
import { Plugin } from '../../interfaces/plugin.interface';

@Component({
  selector: 'app-plugin-card',
  templateUrl: './plugin-card.component.html',
  styleUrls: ['./plugin-card.component.scss']
})
export class PluginCardComponent implements OnInit {

  @Input() plugin: Plugin;

  constructor() { }

  ngOnInit(): void {
  }

}
