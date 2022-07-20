import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-oval-large',
  templateUrl: './button-oval-large.component.html',
  styleUrls: ['./button-oval-large.component.scss']
})
export class ButtonOvalLargeComponent {
  
  @Input() text: string;
  @Input() stroke: string;
  @Input() disabled: boolean;
}
