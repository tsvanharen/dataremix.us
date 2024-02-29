import type { Meta, StoryObj } from '@storybook/react';
import Logo, { Variant } from '.';

const meta = {
  title: 'Logo',
  component: Logo,
  tags: ['autodocs'],
} satisfies Meta<typeof Logo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Nav: Story = {
  parameters: {
    controls: { exclude: ['variant'] },
  },
};

export const HomePage: Story = {
  args: {
    variant: Variant.HomePage,
  },
  parameters: {
    controls: { exclude: ['variant'] },
  },
};

export const Favicon: Story = {
  args: {
    variant: Variant.Favicon,
  },
  parameters: {
    controls: { exclude: ['variant'] },
  },
};
