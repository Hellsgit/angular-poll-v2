import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Poll } from 'src/app/types/types';

@Component({
  selector: 'app-input-question',
  templateUrl: './input-question.component.html',
})
export class InputQuestionComponent implements OnInit {
  currentData = {} as Poll;

  constructor(private data: DataService) {}

  questionForm = new FormControl('', Validators.maxLength(80));

  ngOnInit(): void {
    this.data.recentData.subscribe((data) => {
      this.currentData = data;
      this.questionForm.setValue(data.question);
    });
  }

  onPutQuestion() {
    if (this.questionForm.invalid) {
      return;
    }

    this.data.putQuestion({ question: this.questionForm.value });
  }
}
