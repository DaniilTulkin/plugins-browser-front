import { Component, OnInit } from '@angular/core';

import { PluginsWindowService } from '../shared/services/plugin-window.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private pluginsWindowService: PluginsWindowService) { }

  ngOnInit(): void {
    console.log('quth onInit')
    this.pluginsWindowService.resizeWindow("auth");
    console.log('auth component')
  }
}
