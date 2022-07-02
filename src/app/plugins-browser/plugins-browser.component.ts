import { Component, OnInit } from '@angular/core';

import { PluginsService } from 'src/app/shared/services/plugins.service';
import { Plugin } from './interfaces/plugin.interface';

@Component({
  selector: 'app-plugins-browser',
  templateUrl: './plugins-browser.component.html',
  styleUrls: ['./plugins-browser.component.scss']
})
export class PluginsBrowserComponent implements OnInit {

  plugins: Plugin[] = [
    {
      shortName: "Fc",
      name: "Finishing calculating",
      description: "Generates the entire finishing of the selected rooms, including walls, floors, ceilings, plinths. After generating elements writes their compound and volumes into parameters of corresponding room.",
      dllName: "RoomFinishing"
    },
    {
      shortName: "Nr",
      name: "Navisworks report",
      description: "",
      dllName: "NavisworksReport"
    },
    {
      shortName: "Fm",
      name: "Files manager",
      description: "",
      dllName: "FilesManager"
    },
    {
      shortName: "Ei",
      name: "Excel imp/exp",
      description: "",
      dllName: "ExcelImportExport"
    },
    {
      shortName: "Mc",
      name: "MEP calculations",
      description: "",
      dllName: "MEPCalculations"
    },
    {
      shortName: "Dg",
      name: "Dimensions to grids",
      description: "",
      dllName: "DimensionsToGrids"
    },
    {
      shortName: "Ph",
      name: "Place heaters",
      description: "",
      dllName: "PlaceHeaters"
    },
    {
      shortName: "Cf",
      name: "Convert file to nwc",
      description: "",
      dllName: "NWCConverter"
    },
    {
      shortName: "Cs",
      name: "Create sheets",
      description: "",
      dllName: "CreateSheets"
    }
  ];

  constructor(private pluginsService: PluginsService) { }

  ngOnInit(): void {
    this.pluginsService.resizeWindow("plugins-browser")
  }
}
