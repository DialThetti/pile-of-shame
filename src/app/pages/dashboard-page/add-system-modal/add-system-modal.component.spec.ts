import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSystemModalComponent } from './add-system-modal.component';

describe('AddSystemModalComponent', () => {
  let component: AddSystemModalComponent;
  let fixture: ComponentFixture<AddSystemModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSystemModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSystemModalComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
