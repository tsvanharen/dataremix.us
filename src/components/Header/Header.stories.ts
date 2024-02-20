import type { Meta, StoryObj } from '@storybook/react';
import { HeaderInner } from '.';

const meta = {
  title: 'Headers',
  component: HeaderInner,
  tags: ['autodocs'],
} satisfies Meta<typeof HeaderInner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const HomePage: Story = {
  args: {
    pathName: '/',
  },
  parameters: {
    controls: { exclude: ['pathName'] },
  },
};

export const InnerPages: Story = {
  args: {
    pathName: '/insights',
  },
  parameters: {
    controls: { exclude: ['pathName'] },
  },
};
