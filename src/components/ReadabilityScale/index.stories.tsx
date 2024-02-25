import type { Meta, StoryObj } from '@storybook/react';
import ReadabilityScale from '.';

const meta = {
  title: 'Readability Scale',
  component: ReadabilityScale,
  tags: ['autodocs'],
} satisfies Meta<typeof ReadabilityScale>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Level9: Story = {
  args: {
    ease: 9,
  },
  parameters: {
    controls: { exclude: ['ease'] },
  },
};

export const Level8: Story = {
  args: {
    ease: 8,
  },
  parameters: {
    controls: { exclude: ['ease'] },
  },
};

export const Level7: Story = {
  args: {
    ease: 7,
  },
  parameters: {
    controls: { exclude: ['ease'] },
  },
};

export const Level6: Story = {
  args: {
    ease: 6,
  },
  parameters: {
    controls: { exclude: ['ease'] },
  },
};

export const Level5: Story = {
  args: {
    ease: 5,
  },
  parameters: {
    controls: { exclude: ['ease'] },
  },
};

export const Level4: Story = {
  args: {
    ease: 4,
  },
  parameters: {
    controls: { exclude: ['ease'] },
  },
};

export const Level3: Story = {
  args: {
    ease: 3,
  },
  parameters: {
    controls: { exclude: ['ease'] },
  },
};

export const Level2: Story = {
  args: {
    ease: 2,
  },
  parameters: {
    controls: { exclude: ['ease'] },
  },
};

export const Level1: Story = {
  args: {
    ease: 1,
  },
  parameters: {
    controls: { exclude: ['ease'] },
  },
};

export const Level0: Story = {
  args: {
    ease: 0,
  },
  parameters: {
    controls: { exclude: ['ease'] },
  },
};
