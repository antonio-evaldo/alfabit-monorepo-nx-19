import { Component, Input } from '@angular/core';

@Component({
  selector: 'org-teste-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent {
  @Input() variant: 'primary' | 'secondary' | 'tertiary' = 'primary';
  @Input() size: 'xs' | 'sm' | 'md' | 'xl' | 'title1' | 'title2' | 'title3' = 'md';
  @Input() content: string = 'texto';
  @Input() element: string = 'span';
  @Input() customClass: string = '';

  get computedClasses(): string {
    let classes = 'font-normal ';
    classes += `text-${this.variant || 'gray-primary'} `;
    classes += `text-${this.size} `;
    if (this.customClass) {
      classes += `${this.customClass} `;
    }
    return classes.trim();
  }
}
