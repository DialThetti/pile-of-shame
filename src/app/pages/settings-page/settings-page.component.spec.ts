import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsPageComponent } from './settings-page.component';
import { provideMockStore } from '@ngrx/store/testing';
import {
  initialState,
  systemStateKey,
} from '../../core/state/system/system.reducer';
import { provideRouter } from '@angular/router';

describe('SettingsPageComponent', () => {
  let component: SettingsPageComponent;
  let fixture: ComponentFixture<SettingsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideRouter([]),
        provideMockStore({ initialState: { [systemStateKey]: initialState } }),
      ],
      imports: [SettingsPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SettingsPageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
