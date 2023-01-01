import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PollFormComponent } from './poll-form.component';
import { InputQuestionComponent } from './input-question/input-question.component';
import { InputOptionsComponent } from './input-options/input-options.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [
    PollFormComponent,
    InputQuestionComponent,
    InputOptionsComponent,
  ],
  exports: [PollFormComponent],
})
export class PollFormModule {}
