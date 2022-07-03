import { Component } from '@angular/core';
import { PluginsService } from '../../services/plugins.service';

@Component({
  selector: 'app-collapse-close-panel',
  templateUrl: './collapse-close-panel.component.html',
  styleUrls: ['./collapse-close-panel.component.scss']
})
export class CollapseClosePanelComponent {

  constructor(public pluginsService: PluginsService) { }
}
