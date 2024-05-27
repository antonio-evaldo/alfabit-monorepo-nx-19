import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from '@org-teste/button';
import { action } from '@storybook/addon-actions';
import { userEvent, within } from '@storybook/testing-library';


const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: 'Design System/Molecules/Button',
  // args: {
  //   onClick: action('on-click'),
  // },
  parameters: {
    docs: {
      description: {
        component: 'Este é um componente de botão utilizado para disparar ações.'
      }
    },
    actions: {
      argTypesRegex: '^on.*',
      handles: ['mouseover', 'click'],
    },
  },
  argTypes: {
    onClick: { action: 'clicked' }
  }
};
export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    text: 'Action',
    disabled: false,
    variant: 'primary',
    theme: 'blue',
    onClick: () => console.log('clicked button'),
  }
};

export const PrimaryDisabled: Story = {
  args: {
    ...Primary.args,
    disabled: true,
  }
}

export const Secondary: Story = {
  args: {
    ...Primary.args,
    variant: 'secondary',
  }
};

export const SecondaryDisabled: Story = {
  args: {
    ...Secondary.args,
    disabled: true,
  }
}

export const Tertiary: Story = {
  args: {
    ...Primary.args,
    variant: 'tertiary',
  }
};

export const TertiaryDisabled: Story = {
  args: {
    ...Tertiary.args,
    disabled: true,
  }
};

export const PrimaryViolet: Story = {
  args: {
    ...Primary.args,
    theme: 'violet'
  }
};

export const PrimaryVioletDisabled: Story = {
  args: {
    ...PrimaryViolet.args,
    disabled: true
  }
};

export const SecondaryViolet: Story = {
  args: {
    ...PrimaryViolet.args,
    variant: 'secondary',
  }
};

export const SecondaryVioletDisabled: Story = {
  args: {
    ...SecondaryViolet.args,
    disabled: true,
  }
};

export const TertiaryViolet: Story = {
  args: {
    ...PrimaryViolet.args,
    variant: 'tertiary',
  }
};

export const TertiaryVioletDisabled: Story = {
  args: {
    ...TertiaryViolet.args,
    disabled: true,
  }
};

export const ClickExample: Story = {
  args: {
    text: 'Click Me',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', { name: /Click Me/i }));
  },
};
