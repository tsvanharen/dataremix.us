import type { Meta, StoryObj } from '@storybook/react';
import Logo, { Variant } from '.';

const meta = {
  title: 'Logo',
  component: Logo,
  tags: ['autodocs'],
} satisfies Meta<typeof Logo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NavLogo: Story = {
  parameters: {
    controls: { exclude: ['variant'] },
  },
};

export const LargeLogo: Story = {
  args: {
    variant: Variant.Large,
  },
  parameters: {
    controls: { exclude: ['variant'] },
  },
};
