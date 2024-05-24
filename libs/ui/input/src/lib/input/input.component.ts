import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'org-teste-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  /**
   * Determina se será um `<input>` ou `<textarea>`.
   */
  @Input() multilinha = false;

  /**
   * Desabilita o Input.
   */
  @Input() desabilitado = false;

  /**
   * Indica visualmente que o Input está inválido e define o `aria-invalid`.
   */
  @Input() erro = false;
}
