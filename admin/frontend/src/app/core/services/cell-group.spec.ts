import { TestBed } from '@angular/core/testing';
import { CellGroup } from './cell-group';

describe('CellGroup', () => {
  let service: CellGroup;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CellGroup);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
