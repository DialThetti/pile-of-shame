import { Component, computed } from '@angular/core';
import { Store } from '@ngrx/store';
import { SystemSelectors } from '../../core/state/system/system.selectors';
import { DatePipe } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { System } from '../../core/models/system.model';
import { RouterLink } from '@angular/router';
import { SystemActions } from '../../core/state/system/system.actions';

@Component({
  selector: 'app-settings-page',
  imports: [DatePipe, ReactiveFormsModule, RouterLink],
  templateUrl: './settings-page.component.html',
  styleUrl: './settings-page.component.scss',
})
export class SettingsPageComponent {
  data = this.store.selectSignal(SystemSelectors.selectEntities);
  uri = computed(
    () =>
      'data:application/json;charset=UTF-8,' +
      encodeURIComponent(JSON.stringify(this.data()))
  );
  now = new Date();

  form = new FormGroup({
    file: new FormControl(),
  });
  constructor(private store: Store) {
    this.form.valueChanges.subscribe(() => {
      const file = (document.getElementById('import-file') as HTMLInputElement)
        ?.files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.readAsText(file, 'UTF-8');
      reader.onload = ({ target }) => {
        const textContent = target?.result as string;
        this.doImport(JSON.parse(textContent));
      };
      reader.onerror = function () {
        alert('error reading file');
      };
    });
  }

  doImport(data: System[]) {
    const storing = {
      system: {
        ids: data.map((e: System) => e.id),
        entities: data.reduce(
          (a: Record<string, System>, b: System) => ({ ...a, [b.id]: b }),
          {}
        ),
      },
    };
    storing.system.ids.forEach((id, index) => {
      const system = storing.system.entities[id];
      setTimeout(
        () => this.store.dispatch(SystemActions.saveSystem({ system })),
        index * 3000
      );
    });

    localStorage.setItem('pos.system', JSON.stringify(storing));
    //window.location.href = window.location.origin;
  }

  reset() {
    localStorage.removeItem('pos.system');
    window.location.href = window.location.origin;
  }
}
