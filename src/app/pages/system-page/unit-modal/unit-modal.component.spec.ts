import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitModalComponent } from './unit-modal.component';
import { provideMockStore } from '@ngrx/store/testing';
import {
  initialState,
  systemStateKey,
} from '../../../core/state/system/system.reducer';

describe('UnitModalComponent', () => {
  let component: UnitModalComponent;
  let fixture: ComponentFixture<UnitModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideMockStore({ initialState: { [systemStateKey]: initialState } }),
      ],
      imports: [UnitModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UnitModalComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
