import type { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from '../../../input/src/lib/input/input.component';

const meta: Meta<InputComponent> = {
  component: InputComponent,
  title: 'Input',
};
export default meta;
type Story = StoryObj<InputComponent>;

export const Primary: Story = {
  args: {
    multilinha: false,
  },
};
