import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-oval-medium',
  templateUrl: './button-oval-medium.component.html',
  styleUrls: ['./button-oval-medium.component.scss']
})
export class ButtonOvalMediumComponent {

  @Input() text: string;
  @Input() stroke: string;
}
