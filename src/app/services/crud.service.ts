import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Poll, Option, Question, OptionValue } from '../types/types';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  private urlPoll: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  public getPoll(): Observable<Poll> {
    return this.http.get<Poll>(this.urlPoll);
  }

  public putQuestion(question: Question): Observable<Poll> {
    return this.http.put<Poll>(this.urlPoll + 'question', question);
  }

  public addOption(option: OptionValue): Observable<Poll> {
    return this.http.post<Poll>(this.urlPoll + 'options', option);
  }

  public patchOption(option: Option): Observable<Poll> {
    return this.http.patch<Poll>(this.urlPoll + 'options/' + option.id, option);
  }

  public deleteOption(id: number): Observable<Poll> {
    return this.http.delete<Poll>(this.urlPoll + 'options/' + id);
  }

  public resetPoll(): Observable<Poll> {
    return this.http.patch<Poll>(this.urlPoll, {});
  }
}
