import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CellGroups } from './cell-groups';

describe('CellGroups', () => {
  let component: CellGroups;
  let fixture: ComponentFixture<CellGroups>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CellGroups],
    }).compileComponents();

    fixture = TestBed.createComponent(CellGroups);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
