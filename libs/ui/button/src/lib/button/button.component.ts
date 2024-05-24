import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

type variants = 'primary' | 'secondary' | 'tertiary';
type themes = 'blue' | 'violet';

@Component({
  selector: 'org-teste-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  /**
   * Texto do botão.
   */
  @Input() text = '';
  @Input() disabled = false;
  @Input() variant: variants = 'primary';
  @Input() theme: themes = 'blue';

  getClasses(): string {
    return `${this.variant} ${this.theme}`;
  }
}
