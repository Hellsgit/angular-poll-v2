import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { PollChartComponent } from './poll-chart.component';

describe('PollChartComponent', () => {
  let component: PollChartComponent;
  let fixture: ComponentFixture<PollChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PollChartComponent],
      imports: [HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PollChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
