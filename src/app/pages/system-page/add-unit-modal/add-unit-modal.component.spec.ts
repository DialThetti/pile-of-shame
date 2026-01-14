import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUnitModalComponent } from './add-unit-modal.component';
import { provideMockStore } from '@ngrx/store/testing';
import { initialState, systemStateKey } from '../../../core/state/system/system.reducer';

describe('AddUnitModalComponent', () => {
  let component: AddUnitModalComponent;
  let fixture: ComponentFixture<AddUnitModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideMockStore({ initialState: { [systemStateKey]: initialState } })],
      imports: [AddUnitModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddUnitModalComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
