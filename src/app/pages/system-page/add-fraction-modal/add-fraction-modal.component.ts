import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { Store } from '@ngrx/store';
import { SystemActions } from '../../../core/state/system/system.actions';

@Component({
  selector: 'app-add-fraction-modal',
  imports: [NgClass, ReactiveFormsModule],
  templateUrl: './add-fraction-modal.component.html',
  styleUrl: './add-fraction-modal.component.scss',
})
export class AddFractionModalComponent {
  visible = false;

  @Input({ required: true })
  systemId!: string;
  form = new FormGroup({
    name: new FormControl(''),
  });

  constructor(private store: Store) {}
  open() {
    this.form.reset();
    this.visible = true;
  }

  submit() {
    this.store.dispatch(
      SystemActions.saveFraction({
        name: this.form.controls.name.value!,
        systemId: this.systemId,
      })
    );

    this.visible = false;
  }
}
