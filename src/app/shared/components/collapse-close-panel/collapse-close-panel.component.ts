import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutersEnum } from '../../enums/routers.enum';
import { PluginsService } from '../../services/plugins.service';

@Component({
  selector: 'app-collapse-close-panel',
  templateUrl: './collapse-close-panel.component.html',
  styleUrls: ['./collapse-close-panel.component.scss']
})
export class CollapseClosePanelComponent implements OnInit{

  constructor(public pluginsService: PluginsService,
              private router: Router) { }

  ngOnInit(): void {
    this.pluginsService.resizeWindow("plugins-browser");
    this.router.navigateByUrl(RoutersEnum.Login);
  }
}
