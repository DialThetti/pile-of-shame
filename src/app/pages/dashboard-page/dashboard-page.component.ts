import { Component, computed } from '@angular/core';
import { ProgressCardComponent } from '../../shared/progress-card/progress-card.component';
import { AddSystemModalComponent } from './add-system-modal/add-system-modal.component';
import { RouterLink } from '@angular/router';
import { Progress, System } from '../../core/models/system.model';
import { Store } from '@ngrx/store';
import { SystemSelectors } from '../../core/state/system/system.selectors';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard-page',
  imports: [ProgressCardComponent, AddSystemModalComponent, RouterLink, DatePipe],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss',
})
export class DashboardPageComponent {
  data = this.store.selectSignal(SystemSelectors.selectEntities);

  now = new Date();
  uri = computed(
    () => 'data:application/json;charset=UTF-8,' + encodeURIComponent(JSON.stringify(this.data()))
  );
  progresses = computed(() => this.data()?.map((entry) => this.getProcesses(entry)) ?? []);

  constructor(private store: Store) {}

  getProcesses(system: System): Progress {
    return system.fractions
      .map((fraction) =>
        fraction.units
          .map((u) => u.progress)
          .reduce((a, b) => ({ current: a.current + b.current, max: a.max + b.max }), {
            max: 0,
            current: 0,
          })
      )
      .reduce((a, b) => ({ current: a.current + b.current, max: a.max + b.max }), {
        max: 0,
        current: 0,
      });
  }
}
