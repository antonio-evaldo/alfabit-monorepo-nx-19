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
    multiline: false,
    disabled: false,
    invalid: false,
    errorMessage: '',
    label: ''
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true
  },
};

export const Invalid: Story = {
  args: {
    ...Default.args,
    invalid: true,
    errorMessage: 'Mensagem de erro!',
  },
};

export const Multiline: Story = {
  args: {
    ...Default.args,
    multiline: true
  },
};

export const MultilineDisabled: Story = {
  args: {
    ...Multiline.args,
    disabled: true
  },
};

export const MultilineInvalid: Story = {
  args: {
    ...Multiline.args,
    invalid: true,
    errorMessage: 'Mensagem de erro!',
  },
};

export const DefaultWithLabel: Story = {
  args: {
    ...Default.args,
    label: 'Label'
  },
};

export const DisabledWithLabel: Story = {
  args: {
    ...Disabled.args,
    label: 'Label'
  },
};

export const InvalidWithLabel: Story = {
  args: {
    ...Invalid.args,
    label: 'Label'
  },
};

export const MultilineWithLabel: Story = {
  args: {
    ...Multiline.args,
    label: 'Label'
  },
};

export const MultilineDisabledWithLabel: Story = {
  args: {
    ...MultilineDisabled.args,
    label: 'Label'
  },
};

export const MultilineInvalidWithLabel: Story = {
  args: {
    ...MultilineInvalid.args,
    label: 'Label'
  },
};
