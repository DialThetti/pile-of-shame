import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { Store } from '@ngrx/store';
import { SystemActions } from '../../../core/state/system/system.actions';
import { Unit } from '../../../core/models/unit.model';
import { v4 as uuid } from 'uuid';
@Component({
  selector: 'app-unit-modal',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './unit-modal.component.html',
  styleUrl: './unit-modal.component.scss',
})
export class UnitModalComponent {
  visible = false;

  @Input({ required: true })
  systemId!: string;
  @Input({ required: true })
  fraction!: string;
  form = new FormGroup({
    name: new FormControl(''),
    max: new FormControl(10),
    current: new FormControl(0),
    metaYear: new FormControl(0),
  });

  private unit?: Unit;

  constructor(private store: Store) {}
  open(
    unit: Unit = {
      id: uuid(),
      name: '',
      progress: { current: 0, max: 10 },
      meta: { paintingYear: new Date().getFullYear() },
    }
  ) {
    this.form.reset({
      name: unit.name,
      max: unit.progress.max,
      current: unit.progress.current,
      metaYear: unit.meta.paintingYear,
    });
    this.visible = true;
    this.unit = unit;
  }

  close() {
    this.unit = undefined;
    this.visible = false;
  }

  submit() {
    this.store.dispatch(
      SystemActions.saveUnits({
        systemId: this.systemId,
        fractionId: this.fraction,
        unit: {
          id: this.unit!.id,
          name: this.form.controls.name.value!,
          progress: {
            current: this.form.controls.current.value!,
            max: this.form.controls.max.value!,
          },
          meta: {
            paintingYear: this.form.controls.metaYear.value ?? undefined,
          },
        },
      })
    );

    this.close();
  }
}
