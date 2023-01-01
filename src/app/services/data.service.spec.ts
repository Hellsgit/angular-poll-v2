import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { cold } from 'jasmine-marbles';

import { Poll } from '../types/types';
import { CrudService } from './crud.service';
import { CrudServiceStub } from '../testing/crud.service.stub';

import { DataService } from './data.service';
import { of } from 'rxjs';

describe('DataService', () => {
  let service: DataService;

  let getPollSpy: jasmine.Spy;
  let putQuestionSpy: jasmine.Spy;
  let addOptionSpy: jasmine.Spy;
  let patchOptionSpy: jasmine.Spy;
  let deleteOptionSpy: jasmine.Spy;
  let resetPollSpy: jasmine.Spy;

  const response = {
    question: 'Leukste naam van 2022?',
    options: [
      { id: 1, option: 'Noah', votes: 10 },
      { id: 2, option: 'Lucas', votes: 5 },
    ],
    totalVotes: 15,
    totalOptions: 1,
  } as Poll;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        DataService,
        { provide: CrudService, useClass: CrudServiceStub },
      ],
    });
    service = TestBed.inject(DataService);
    const crudService = TestBed.inject(CrudService);

    getPollSpy = spyOn(crudService, 'getPoll');
    putQuestionSpy = spyOn(crudService, 'putQuestion').and.callThrough();
    addOptionSpy = spyOn(crudService, 'addOption').and.callThrough();
    patchOptionSpy = spyOn(crudService, 'patchOption').and.callThrough();
    deleteOptionSpy = spyOn(crudService, 'deleteOption').and.callThrough();
    resetPollSpy = spyOn(crudService, 'resetPoll').and.callThrough();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Data Methods', () => {
    it('should return poll object', () => {
      getPollSpy.and.returnValue(of(response));

      const poll = service.init();

      expect(getPollSpy).toHaveBeenCalled();
      // expect(poll).toBeObservable(cold('(a|)', { a: response }));
    });

    it('should replace question', () => {
      const question = { question: 'wat' };
      service.putQuestion(question);

      expect(putQuestionSpy).toHaveBeenCalledWith({ question: 'wat' });
    });

    it('should add an option', () => {
      const option = { option: 'Dennis' };
      service.addingOption(option);

      expect(addOptionSpy).toHaveBeenCalled();
    });

    it('should update an option', () => {
      const option = { id: 2, option: 'Dennis', votes: 5 };
      service.patchOption(option);

      expect(patchOptionSpy).toHaveBeenCalled();
    });

    it('should delete an option', () => {
      service.deleteOption(2);

      expect(deleteOptionSpy).toHaveBeenCalled();
    });

    xit('should clear poll data', () => {
      resetPollSpy.and.returnValue(cold('a'));
      const result = service.resetPoll();

      expect(resetPollSpy).toHaveBeenCalled();
      expect(result).toBeObservable(cold('a'));
    });
  });
});
