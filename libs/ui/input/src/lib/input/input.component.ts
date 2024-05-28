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
   * Se for `false`, será um `<input>`. Se for `true`, será um `<textarea>`.
   */
  @Input() multiline = false;

  /**
   * Desabilita o Input.
   */
  @Input() disabled = false;

  /**
   * Se definido para `true`, indica visualmente que o Input está inválido e define `aria-invalid="true"`. Defina esse atributo apenas em validações personalizadas. Quando possível, utilize a validação nativa do HTML.
   */
  @Input() invalid = false;

  /**
   * Mensagem de erro para quando o Input for inválido.
   */
  @Input() errorMessage = '';
}
