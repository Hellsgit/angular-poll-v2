import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { OptionValue, Poll, Question, Option } from '../types/types';

@Injectable()
export class CrudServiceStub {
  response = {
    question: 'Leukste naam van 2022?',
    options: [
      { id: 1, option: 'Noah', votes: 10 },
      { id: 2, option: 'Lucas', votes: 5 },
    ],
    totalVotes: 15,
    totalOptions: 1,
  };

  getPoll(): Observable<Poll> {
    return of(this.response);
  }

  putQuestion(question: Question): Observable<Poll> {
    return of(this.response);
  }

  addOption(option: OptionValue): Observable<Poll> {
    return of(this.response);
  }

  patchOption(option: Option): Observable<Poll> {
    return of(this.response);
  }

  deleteOption(id: number): Observable<Poll> {
    return of(this.response);
  }

  resetPoll(): Observable<Poll> {
    return of({
      question: '',
      options: [],
      totalVotes: 0,
      totalOptions: 0,
    });
  }
}
