import type { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from '@org-teste/input';

const meta: Meta<InputComponent> = {
  component: InputComponent,
  title: 'Input',
};
export default meta;
type Story = StoryObj<InputComponent>;

export const Primary: Story = {
  args: {
    multilinha: false,
    desabilitado: false,
    invalido: false,
    mensagemDeErro: 'Mensagem de erro!'
  },
};
