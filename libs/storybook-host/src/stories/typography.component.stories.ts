import type { Meta, StoryObj } from '@storybook/angular';
import { TypographyComponent } from '../../../ui/typography/src/lib/typography/typography.component';

const meta: Meta<TypographyComponent> = {
  component: TypographyComponent,
  title: 'Design System/Atoms/Typography',
};
export default meta;
type Story = StoryObj<TypographyComponent>;

export const Primary: Story = {
  args: {},
};
