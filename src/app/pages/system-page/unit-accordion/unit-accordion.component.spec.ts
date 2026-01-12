import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitAccordionComponent } from './unit-accordion.component';

describe('UnitAccordionComponent', () => {
  let component: UnitAccordionComponent;
  let fixture: ComponentFixture<UnitAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnitAccordionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitAccordionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
