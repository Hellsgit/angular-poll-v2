import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CrudService } from './crud.service';
import { Poll, Option, Question, OptionValue } from '../types/types';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private _data$: BehaviorSubject<Poll> = new BehaviorSubject({} as Poll);
  public readonly recentData = this._data$.asObservable();

  constructor(private crud: CrudService, private http: HttpClient) {
    this.init();
  }

  get poll() {
    return this._data$.asObservable();
  }

  init() {
    this.crud.getPoll().subscribe((data) => {
      this._data$.next(data as Poll);
    });
  }

  putQuestion(question: Question) {
    this.crud.putQuestion(question).subscribe((poll) => {
      this._data$.next(poll);
    });
  }

  addingOption(option: OptionValue) {
    this.crud.addOption(option).subscribe({
      next: (poll) => {
        this._data$.next(poll);
      },
      error: (res) => {
        console.log(res.error.msg);
      },
    });
  }

  deleteOption(id: number) {
    this.crud.deleteOption(id).subscribe({
      next: (poll) => {
        this._data$.next(poll);
      },
      error: (res) => {
        console.log(res.error.msg);
      },
    });
  }

  patchOption(option: Option) {
    this.crud.patchOption(option).subscribe({
      next: (poll) => {
        this._data$.next(poll);
      },
      error: (res) => {
        console.log(res.error.msg);
      },
    });
  }

  resetPoll() {
    this.crud.resetPoll().subscribe({
      next: (poll) => {
        this._data$.next(poll);
      },
      error: (res) => {
        console.log(res.error.msg);
      },
    });
  }
}
