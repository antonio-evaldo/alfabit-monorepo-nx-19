import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from '@org-teste/button';

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: 'Button',
  parameters: {
    docs: {
      description: {
        component: 'Este é um componente de botão utilizado para disparar ações.'
      }
    },
  }
};
export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primario: Story = {
  args: {
    texto: 'Action',
    desabilitado: false,
    variante: 'primario',
    tema: 'azul'
  }
};

export const PrimarioDesabilitado: Story = {
  args: {
    ...Primario.args,
    desabilitado: true,
  }
}

export const Secundario: Story = {
  args: {
    ...Primario.args,
    variante: 'secundario',
  }
};

export const SecundarioDesabilitado: Story = {
  args: {
    ...Secundario.args,
    desabilitado: true,
  }
}

export const Terciario: Story = {
  args: {
    ...Primario.args,
    variante: 'terciario',
  }
};

export const TerciarioDesabilitado: Story = {
  args: {
    ...Terciario.args,
    desabilitado: true,
  }
};

export const PrimarioVioleta: Story = {
  args: {
    ...Primario.args,
    tema: 'violeta'
  }
};

export const PrimarioVioletaDesabilitado: Story = {
  args: {
    ...PrimarioVioleta.args,
    desabilitado: true
  }
};

export const SecundarioVioleta: Story = {
  args: {
    ...PrimarioVioleta.args,
    variante: 'secundario',
  }
};

export const SecundarioVioletaDesabilitado: Story = {
  args: {
    ...SecundarioVioleta.args,
    desabilitado: true,
  }
};

export const TerciarioVioleta: Story = {
  args: {
    ...PrimarioVioleta.args,
    variante: 'terciario',
  }
};

export const TerciarioVioletaDesabilitado: Story = {
  args: {
    ...TerciarioVioleta.args,
    desabilitado: true,
  }
};
