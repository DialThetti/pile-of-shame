import { Component, Input } from '@angular/core';
import { Unit } from '../../../core/models/unit.model';
import { UnitModalComponent } from '../unit-modal/unit-modal.component';
import { Store } from '@ngrx/store';
import { SystemActions } from '../../../core/state/system/system.actions';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-unit-accordion',
  imports: [UnitModalComponent, NgStyle],
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
    unit = {
      ...unit,
      progress: {
        max: unit.progress.max,
        current: Math.min(unit.progress.max, unit.progress.current + 1),
      },
    };
    this.store.dispatch(
      SystemActions.saveUnits({
        systemId: this.systemId,
        fractionId: this.fractionId,
        unit,
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
