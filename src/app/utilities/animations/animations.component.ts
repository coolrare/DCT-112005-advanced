import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-animations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css'],
})
export class AnimationsComponent {
  _type = '';
  @Input() set type(val: string) {
    this._type = val;
  }
  get type() {
    return this._type;
  }
}
