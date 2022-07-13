import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonOvalSmallComponent } from './button-oval-small/button-oval-small.component';
import { ButtonOvalMediumComponent } from './button-oval-medium/button-oval-medium.component';
import { ButtonOvalLargeComponent } from './button-oval-large/button-oval-large.component';



@NgModule({
  declarations: [
    ButtonOvalSmallComponent,
    ButtonOvalMediumComponent,
    ButtonOvalLargeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonOvalSmallComponent,
    ButtonOvalMediumComponent,
    ButtonOvalLargeComponent
  ]
})
export class ButtonsModule { }
