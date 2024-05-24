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
   * Se definido para `true`, indica visualmente que o Input está inválido e define `aria-invalid="true"`. Defina esse atributo apenas em validações personalizadas. Quando possível, utilize a validação nativa do HTML.
   */
  @Input() invalido = false;

  /**
   * Mensagem de erro para quando o Input for inválido.
   */
  @Input() mensagemDeErro = '';
}
