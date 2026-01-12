import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUnitModalComponent } from './add-unit-modal.component';

describe('AddUnitModalComponent', () => {
  let component: AddUnitModalComponent;
  let fixture: ComponentFixture<AddUnitModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddUnitModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUnitModalComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
