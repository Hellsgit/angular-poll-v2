import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Poll } from 'src/app/types/types';

@Component({
  selector: 'app-poll-form',
  templateUrl: './poll-form.component.html',
})
export class PollFormComponent implements OnInit {
  currentData = {} as Poll;

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.recentData.subscribe((data) => {
      this.currentData = data;
    });
  }

  onResetOption() {
    this.data.resetPoll();
  }
}
