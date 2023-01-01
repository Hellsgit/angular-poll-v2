import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { PollFormComponent } from './poll-form.component';
import { Component } from '@angular/core';

describe('PollFormComponent', () => {
  let component: PollFormComponent;
  let fixture: ComponentFixture<PollFormComponent>;

  @Component({ selector: 'app-input-options', template: '' })
  class InputOptionsComponentStub {}

  @Component({ selector: 'app-input-question', template: '' })
  class InputQuestionComponentStub {}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PollFormComponent,
        InputOptionsComponentStub,
        InputQuestionComponentStub,
      ],
      imports: [HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PollFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
