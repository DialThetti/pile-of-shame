/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected readonly title = signal('pile-of-shame');

  ngOnInit(): void {
    (globalThis as any).doImport = (data: any) => {
      const storing = {
        system: {
          ids: data.map((e: any) => e.id),
          entities: data.reduce((a: any, b: any) => ({ ...a, [b.id]: b }), {}),
        },
      };
      localStorage.setItem('pos.system', JSON.stringify(storing));
    };
  }
}
