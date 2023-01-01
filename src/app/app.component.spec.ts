import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  @Component({ selector: 'app-toolbar', template: '' })
  class ToolbarComponentStub {}

  @Component({ selector: 'app-poll-form', template: '' })
  class PollFormComponentStub {}

  @Component({ selector: 'app-poll-survey', template: '' })
  class PollSurveyComponentStub {}

  @Component({ selector: 'app-poll-chart', template: '' })
  class PollChartComponentStub {}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ToolbarComponentStub,
        PollSurveyComponentStub,
        PollChartComponentStub,
        PollFormComponentStub,
      ],
      providers: [],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
