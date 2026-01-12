import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFractionModalComponent } from './add-fraction-modal.component';

describe('AddFractionsModalComponent', () => {
  let component: AddFractionModalComponent;
  let fixture: ComponentFixture<AddFractionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
