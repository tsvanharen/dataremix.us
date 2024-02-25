/* eslint-disable jsx-a11y/control-has-associated-label */
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import ReadabilityBadge from '@/components/ReadabilityBadge';
import { scoreDefinitions } from './flesch-kincaid';

function FleschKincaid() {
  return (
    <div>
      <p>
        These are the Flesch-Kincaid reading ease score definitions defined in the app.
      </p>
      <table>
        <thead>
          <tr>
            <th>
              Ease
            </th>
            <th>
              Considered Easy?
            </th>
            <th>
              US Grade Level
            </th>
            <th className="text-center">
              Minimum Score
              <br />
              (Inclusive)
            </th>
            <th className="text-center">
              Maximum Score
              <br />
              (Exclusive)
            </th>
            <th>
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {
              scoreDefinitions.map((entry) => (
                <tr key={entry.ease}>
                  <td>{entry.ease}</td>
                  <td>{entry.isEasy ? 'Yes' : 'No'}</td>
                  <td>{entry.usGradeLevel}</td>
                  <td className="text-right">{entry.gte}</td>
                  <td className="text-right">{entry.lt}</td>
                  <td>{entry.description}</td>
                </tr>
              ))
            }
        </tbody>
      </table>
    </div>
  );
}

const meta = {
  title: 'Constants/Flesch-Kincaid Score Definitions',
  component: FleschKincaid,
  tags: ['autodocs'],
} satisfies Meta<typeof FleschKincaid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
