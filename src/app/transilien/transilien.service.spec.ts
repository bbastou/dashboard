import { TestBed, inject } from '@angular/core/testing';
import { TransilienService } from './transilien.service';

describe('TransilienService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransilienService]
    });
  });

  it('should ...', inject([TransilienService], (service: TransilienService) => {
    expect(service).toBeTruthy();
  }));
});
