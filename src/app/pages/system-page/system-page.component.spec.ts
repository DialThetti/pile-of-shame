import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemPageComponent } from './system-page.component';
import { provideMockStore } from '@ngrx/store/testing';
import {
  initialState,
  systemStateKey,
} from '../../core/state/system/system.reducer';

describe('SystemPageComponent', () => {
  let component: SystemPageComponent;
  let fixture: ComponentFixture<SystemPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideMockStore({ initialState: { [systemStateKey]: initialState } }),
      ],

      imports: [SystemPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SystemPageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
