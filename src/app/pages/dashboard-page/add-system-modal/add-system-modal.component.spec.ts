import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSystemModalComponent } from './add-system-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { provideMockStore } from '@ngrx/store/testing';
import { initialState, systemStateKey } from '../../../core/state/system/system.reducer';

describe('AddSystemModalComponent', () => {
  let component: AddSystemModalComponent;
  let fixture: ComponentFixture<AddSystemModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideMockStore({ initialState: { [systemStateKey]: initialState } })],
      imports: [AddSystemModalComponent, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AddSystemModalComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
