import { Component, computed, effect, input } from '@angular/core';
import { ProgressCardComponent } from '../../shared/progress-card/progress-card.component';
import { RouterLink } from '@angular/router';
import { Fraction, Progress } from '../../core/models/system.model';
import { AddFractionModalComponent } from './add-fraction-modal/add-fraction-modal.component';
import { UnitAccordionComponent } from './unit-accordion/unit-accordion.component';
import { Store } from '@ngrx/store';
import { SystemSelectors } from '../../core/state/system/system.selectors';
import { SystemActions } from '../../core/state/system/system.actions';
import { LoadingSpinnerComponent } from '../../shared/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-system-page',
  imports: [
    ProgressCardComponent,
    RouterLink,
    AddFractionModalComponent,
    UnitAccordionComponent,
    LoadingSpinnerComponent,
  ],
  templateUrl: './system-page.component.html',
  styleUrl: './system-page.component.scss',
})
export class SystemPageComponent {
  id = input<string>();
  loading = this.store.selectSignal(SystemSelectors.isLoading);

  system = computed(() =>
    this.store.selectSignal(SystemSelectors.selectEntity(this.id()))()
  );

  progresses = computed(() => {
    return (
      this.system()?.fractions.map(entry => this.getFractionProcess(entry)) ??
      []
    );
  });

  constructor(private store: Store) {
    effect(() => {
      store.dispatch(SystemActions.loadSystems());
    });
  }

  getFractionProcess(fraction: Fraction): Progress {
    return fraction.units
      .map(u => u.progress)
      .reduce(
        (a, b) => ({ current: a.current + b.current, max: a.max + b.max }),
        {
          max: 0,
          current: 0,
        }
      );
  }

  delete() {
    this.store.dispatch(SystemActions.deleteSystem({ id: this.id()! }));
  }
}
