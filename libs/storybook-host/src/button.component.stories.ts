import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from '../../button/src/lib/button/button.component';

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: 'ButtonComponent',
};
export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    texto: 'Action',
    desabilitado: false,
    variante: 'primario',
    tema: 'azul',
  },
};
