import type { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from '@org-teste/input';

const meta: Meta<InputComponent> = {
  component: InputComponent,
  title: 'Input',
};
export default meta;
type Story = StoryObj<InputComponent>;

export const Default: Story = {
  args: {
    multilinha: false,
    desabilitado: false,
    invalido: false,
    mensagemDeErro: '',
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    desabilitado: true
  },
};

export const Invalid: Story = {
  args: {
    ...Default.args,
    invalido: true,
    mensagemDeErro: 'Mensagem de erro!',
  },
};

export const Multiline: Story = {
  args: {
    ...Default.args,
    multilinha: true
  },
};

export const MultilineDisabled: Story = {
  args: {
    ...Multiline.args,
    desabilitado: true
  },
};

export const MultilineInvalid: Story = {
  args: {
    ...Multiline.args,
    invalido: true,
    mensagemDeErro: 'Mensagem de erro!',
  },
};
