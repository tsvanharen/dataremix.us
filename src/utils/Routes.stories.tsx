import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Route } from './routes';

function Routes() {
  return (
    <div>
      <p>
        These are the route constants defined in the app.
      </p>
      <table>
        <thead>
          <tr>
            <th>
              Route
            </th>
            <th>
              Path
            </th>
          </tr>
        </thead>
        <tbody>
          {
              Object.entries(Route).map((entry) => {
                const [key, value] = entry;

                return (
                  <tr key={value}>
                    <td>{key}</td>
                    <td>{value}</td>
                  </tr>
                );
              })
            }
        </tbody>
      </table>
    </div>
  );
}

const meta = {
  title: 'Constants/Routes',
  component: Routes,
  tags: ['autodocs'],
} satisfies Meta<typeof Routes>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
