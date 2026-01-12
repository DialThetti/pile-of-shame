import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { Store } from '@ngrx/store';
import { SystemActions } from '../../../core/state/system/system.actions';

@Component({
  selector: 'app-add-unit-modal',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './add-unit-modal.component.html',
  styleUrl: './add-unit-modal.component.scss',
})
export class AddUnitModalComponent {
  visible = false;

  @Input({ required: true })
  systemId!: string;
  @Input({ required: true })
  fraction!: string;
  form = new FormGroup({
    name: new FormControl(''),
    max: new FormControl(10),
  });

  constructor(private store: Store) {}
  open() {
    this.form.reset();
    this.visible = true;
  }

  submit() {
    this.store.dispatch(
      SystemActions.saveUnits({
        systemId: this.systemId,
        fractionId: this.fraction,
        unit: {
          name: this.form.controls.name.value!,
          progress: {
            current: 0,
            max: this.form.controls.max.value!,
          },
          meta: {},
        },
      })
    );

    this.visible = false;
  }
}
