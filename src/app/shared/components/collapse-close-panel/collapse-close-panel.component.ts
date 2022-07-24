import { Component } from '@angular/core';
import { PluginsWindowService } from '../../services/plugin-window.service';

@Component({
  selector: 'app-collapse-close-panel',
  templateUrl: './collapse-close-panel.component.html',
  styleUrls: ['./collapse-close-panel.component.scss']
})
export class CollapseClosePanelComponent {

  constructor(public pluginsWindowService: PluginsWindowService) { }
}
