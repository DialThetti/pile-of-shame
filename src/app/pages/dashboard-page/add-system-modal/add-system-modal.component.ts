import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { SystemActions } from '../../../core/state/system/system.actions';

@Component({
  selector: 'app-add-system-modal',
  imports: [NgClass, ReactiveFormsModule],
  templateUrl: './add-system-modal.component.html',
  styleUrl: './add-system-modal.component.scss',
})
export class AddSystemModalComponent {
  visible = false;

  form = new FormGroup({
    name: new FormControl('', Validators.required),
  });

  constructor(private store: Store) {}
  open() {
    this.form.reset();
    this.visible = true;
  }

  submit() {
    const name = this.form.controls.name.value!;
    this.store.dispatch(
      SystemActions.saveSystem({
        system: {
          name,
          fractions: [],
          id: name.toLocaleLowerCase().replaceAll(' ', '-'),
        },
      })
    );
    this.visible = false;
  }
}
