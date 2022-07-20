import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-oval-small',
  templateUrl: './button-oval-small.component.html',
  styleUrls: ['./button-oval-small.component.scss']
})
export class ButtonOvalSmallComponent {

  @Input() text: string;
  @Input() stroke: string;
  @Input() disabled: boolean;
}
