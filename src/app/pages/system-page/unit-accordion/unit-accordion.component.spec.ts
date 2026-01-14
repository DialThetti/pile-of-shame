import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitAccordionComponent } from './unit-accordion.component';
import { provideMockStore } from '@ngrx/store/testing';
import { initialState, systemStateKey } from '../../../core/state/system/system.reducer';

describe('UnitAccordionComponent', () => {
  let component: UnitAccordionComponent;
  let fixture: ComponentFixture<UnitAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideMockStore({ initialState: { [systemStateKey]: initialState } })],
      imports: [UnitAccordionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UnitAccordionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
