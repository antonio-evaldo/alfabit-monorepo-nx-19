import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { TypographyComponent } from '../../../ui/typography/src/lib/typography/typography.component';

const meta: Meta<TypographyComponent> = {
  component: TypographyComponent,
  title: 'Design System/Atoms/Typography',
  decorators: [
    moduleMetadata({
      declarations: [TypographyComponent],
    }),
  ],
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'select'},
    },
    size: {
      options: ['xs', 'sm', 'md', 'xl', 'title1', 'title2', 'title3'],
      control: { type: 'select'} ,
    },
    customClass: {
      control: { type: 'text' },
    },
    content: {
      control: { type: 'text' },
    },
  },
};
export default meta;
type Story = StoryObj<TypographyComponent>;

export const Primary: Story = {
  args: {
    content: "Texto",
    size: 'xl',
    variant: 'primary',
    element: 'p'
  },
};
