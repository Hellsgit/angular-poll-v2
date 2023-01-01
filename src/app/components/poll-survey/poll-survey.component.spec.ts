import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { PollSurveyComponent } from './poll-survey.component';

describe('PollSurveyComponent', () => {
  let component: PollSurveyComponent;
  let fixture: ComponentFixture<PollSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PollSurveyComponent],
      imports: [HttpClientModule, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PollSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
