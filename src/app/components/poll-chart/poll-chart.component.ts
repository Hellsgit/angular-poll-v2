import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Chart } from 'src/app/types/types';

@Component({
  selector: 'app-poll-chart',
  templateUrl: './poll-chart.component.html',
})
export class PollChartComponent implements OnInit {
  allVotes: number = 0;
  chart: Chart[] = [];

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.recentData.subscribe((data) => {
      this.allVotes = data.totalVotes;

      if (data.options) {
        this.chart = data.options.map((obj) => ({
          label: obj.option,
          percentage: Number(
            ((100 * obj.votes) / this.allVotes || 0).toFixed(0)
          ),
        }));
      }
    });
  }
}
