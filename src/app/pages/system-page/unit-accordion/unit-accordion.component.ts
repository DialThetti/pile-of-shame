import { Component, Input } from '@angular/core';
import { Unit } from '../../../core/models/system.model';
import { AddUnitModalComponent } from '../add-unit-modal/add-unit-modal.component';
import { Store } from '@ngrx/store';
import { SystemActions } from '../../../core/state/system/system.actions';

@Component({
  selector: 'app-unit-accordion',
  imports: [AddUnitModalComponent],
  templateUrl: './unit-accordion.component.html',
  styleUrl: './unit-accordion.component.scss',
})
export class UnitAccordionComponent {
  collapsed = true;
  @Input()
  units!: Unit[];

  @Input()
  systemId!: string;
  @Input()
  fractionId!: string;

  constructor(private store: Store) {}

  increment(unit: Unit) {
    this.store.dispatch(
      SystemActions.saveUnits({
        systemId: this.systemId,
        fractionId: this.fractionId,
        unit: {
          ...unit,
          progress: {
            max: unit.progress.max,
            current: Math.min(unit.progress.max, unit.progress.current + 1),
          },
        },
      })
    );
  }

  addMeta(unit: Unit) {
    const input = prompt('Year', unit.meta.paintingYear + '');
    const paintingYear = input ? parseInt(input) : undefined;
    this.store.dispatch(
      SystemActions.saveUnits({
        systemId: this.systemId,
        fractionId: this.fractionId,
        unit: {
          ...unit,
          meta: {
            paintingYear,
          },
        },
      })
    );
  }
}
