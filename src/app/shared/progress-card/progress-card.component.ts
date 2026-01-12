import { Component, Input } from '@angular/core';
import { Progress } from './types';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-progress-card',
  imports: [NgStyle],
  templateUrl: './progress-card.component.html',
  styleUrl: './progress-card.component.scss',
})
export class ProgressCardComponent {
  @Input({ required: false })
  name?: string;
  @Input({ required: true })
  progress!: Progress | Progress[];
  @Input()
  variant: 'Slim' | 'Wide' = 'Slim';

  isMulti(progress: Progress | Progress[]): progress is Progress[] {
    return 'length' in progress;
  }

  max(): number {
    return this.isMulti(this.progress)
      ? this.progress.reduce((a, b) => a + b.max, 0)
      : this.progress.max;
  }

  current(): number {
    return this.isMulti(this.progress)
      ? this.progress.reduce((a, b) => a + b.current, 0)
      : this.progress.current;
  }
}
