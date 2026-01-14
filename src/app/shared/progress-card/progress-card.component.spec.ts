import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressCardComponent } from './progress-card.component';

describe('ProgressCardComponent', () => {
  let component: ProgressCardComponent;
  let fixture: ComponentFixture<ProgressCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProgressCardComponent);
    component = fixture.componentInstance;
  });

  describe('single progress', () => {
    beforeEach(async () => {
      component.progress = { current: 2, max: 5 };
      await fixture.whenStable();
    });
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('multi progress', () => {
    beforeEach(async () => {
      component.progress = [];
      await fixture.whenStable();
    });
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
});
