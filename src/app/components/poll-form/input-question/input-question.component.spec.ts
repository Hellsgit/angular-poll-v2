import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { InputQuestionComponent } from './input-question.component';

describe('InputQuestionComponent', () => {
  let component: InputQuestionComponent;
  let fixture: ComponentFixture<InputQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputQuestionComponent],
      imports: [HttpClientModule, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(InputQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
