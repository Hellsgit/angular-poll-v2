import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Poll } from 'src/app/types/types';

@Component({
  selector: 'app-poll-survey',
  templateUrl: './poll-survey.component.html',
})
export class PollSurveyComponent implements OnInit {
  currentData = {} as Poll;
  disbableBtn: boolean = false;
  disbableMsg: boolean = false;
  pollAnswerForm!: FormGroup;

  constructor(private data: DataService, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
    this.data.recentData.subscribe((data) => {
      this.currentData = data;
      this.setShowBtn(data);
      this.setShowMoreMsg(data);
    });
  }

  createForm() {
    this.pollAnswerForm = this.fb.group({
      pollAnswer: ['', Validators.required],
    });
  }

  get pollForm() {
    return this.pollAnswerForm.get('pollAnswer')!.value;
  }

  setShowBtn(data: Poll) {
    this.disbableBtn =
      data.options?.length < 2 || !data.question ? true : false;
  }

  setShowMoreMsg(data: Poll) {
    this.disbableMsg = data.options?.length < 2 ? true : false;
  }

  onSubmit() {
    if (this.pollForm) {
      const option = this.currentData.options.find(
        (opt) => opt.id === Number(this.pollForm)
      );

      if (option !== undefined) {
        option.votes++;
        this.data.patchOption(option);
      }
    }

    this.pollAnswerForm.reset();
  }
}
