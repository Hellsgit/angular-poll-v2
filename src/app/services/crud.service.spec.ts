import { TestBed } from '@angular/core/testing';
import { CrudService } from './crud.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { CrudServiceStub } from '../testing/crud.service.stub';

describe('CrudService', () => {
  let service: CrudService;
  let httpCtrl: HttpTestingController;
  let url = 'lcalhost://3000';

  const response = {
    question: 'Leukste naam van 2022?',
    options: [
      { id: 1, option: 'Noah', votes: 10 },
      { id: 2, option: 'Lucas', votes: 5 },
    ],
    totalVotes: 15,
    totalOptions: 1,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        CrudService,
        { provide: CrudService, useClass: CrudServiceStub },
      ],
    });
    service = TestBed.inject(CrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call Poll object', () => {
    service.getPoll().subscribe((res) => {
      expect(res).toEqual(response);
    });
  });
});
