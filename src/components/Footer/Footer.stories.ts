import type { Meta, StoryObj } from '@storybook/react';
import Footer from '.';

const meta = {
  title: 'Footer',
  component: Footer,
  tags: ['autodocs'],
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const HomePage: Story = {};
