import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CellLeaderLayout } from './cell-leader-layout';

describe('CellLeaderLayout', () => {
  let component: CellLeaderLayout;
  let fixture: ComponentFixture<CellLeaderLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CellLeaderLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(CellLeaderLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
