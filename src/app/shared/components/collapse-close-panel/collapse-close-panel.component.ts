import { Component, OnInit } from '@angular/core';
import { PluginsService } from '../../services/plugins.service';

@Component({
  selector: 'app-collapse-close-panel',
  templateUrl: './collapse-close-panel.component.html',
  styleUrls: ['./collapse-close-panel.component.scss']
})
export class CollapseClosePanelComponent implements OnInit{

  constructor(public pluginsService: PluginsService) { }

  ngOnInit(): void {
    this.pluginsService.resizeWindow("plugins-browser");
  }
}
