import { Component, computed } from '@angular/core';
import { ProgressCardComponent } from '../../shared/progress-card/progress-card.component';
import { AddSystemModalComponent } from './add-system-modal/add-system-modal.component';
import { RouterLink } from '@angular/router';
import { Progress, System } from '../../core/models/system.model';
import { Store } from '@ngrx/store';
import { SystemSelectors } from '../../core/state/system/system.selectors';
import { SystemActions } from '../../core/state/system/system.actions';
import { LoadingSpinnerComponent } from 'src/app/shared/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-dashboard-page',
  imports: [
    ProgressCardComponent,
    AddSystemModalComponent,
    RouterLink,
    LoadingSpinnerComponent,
  ],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss',
})
export class DashboardPageComponent {
  data = this.store.selectSignal(SystemSelectors.selectEntities);
  loading = this.store.selectSignal(SystemSelectors.isLoading);
  progresses = computed(
    () => this.data()?.map(entry => this.getProcesses(entry)) ?? []
  );

  constructor(private store: Store) {
    store.dispatch(SystemActions.loadSystems());
  }

  getProcesses(system: System): Progress {
    return system.fractions
      .map(fraction =>
        fraction.units
          .map(u => u.progress)
          .reduce(
            (a, b) => ({ current: a.current + b.current, max: a.max + b.max }),
            {
              max: 0,
              current: 0,
            }
          )
      )
      .reduce(
        (a, b) => ({ current: a.current + b.current, max: a.max + b.max }),
        {
          max: 0,
          current: 0,
        }
      );
  }
}
