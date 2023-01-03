import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'seed-test-ui',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-ui.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestUiComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
