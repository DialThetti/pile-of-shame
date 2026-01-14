import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFractionModalComponent } from './add-fraction-modal.component';
import { provideMockStore } from '@ngrx/store/testing';
import { initialState, systemStateKey } from '../../../core/state/system/system.reducer';

describe('AddFractionsModalComponent', () => {
  let component: AddFractionModalComponent;
  let fixture: ComponentFixture<AddFractionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideMockStore({ initialState: { [systemStateKey]: initialState } })],
      imports: [AddFractionModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddFractionModalComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
