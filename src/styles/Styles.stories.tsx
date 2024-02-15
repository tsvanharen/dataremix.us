import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { logoFont } from './fonts';

function Styles() {
  return (
    <div>
      <p>
        This story acts as a single resource to view the styling of default HTML elements defined in the global.css file.
      </p>
      <section>
        <h2 className="border-b-2 border-black">Fonts</h2>
        <p>
          The base font is Playfair Display
        </p>
        <p className={logoFont.className}>
          The logo font is Open Sans
        </p>
      </section>
      <section>
        <h2 className="border-b-2 border-black">
          Font Weights
        </h2>
        <div className="font-thin">
          This is font weight 100 (thin)
        </div>
        <div className="font-extralight">
          This is font weight 200 (extra light)
        </div>
        <div className="font-light">
          This is font weight 300 (light)
        </div>
        <div className="font-normal">
          This is font weight 400 (normal)
        </div>
        <div className="font-medium">
          This is font weight 500 (medium)
        </div>
        <div className="font-semibold">
          This is font weight 600 (semi-bold)
        </div>
        <div className="font-bold">
          This is font weight 700 (bold)
        </div>
        <div className="font-extrabold">
          This is font weight 800 (extra bold)
        </div>
        <div className="font-black">
          This is font weight 900 (black)
        </div>
      </section>
      <section>
        <h2 className="border-b-2 border-black">Headers</h2>
        <h1>This is an h1</h1>
        <h2>This is an h2</h2>
        <h3>This is an h3</h3>
        <h4>This is an h4</h4>
        <h5>This is an h5</h5>
        <h6>This is an h6</h6>
      </section>
      <section>
        <h2 className="border-b-2 border-black">Other Elements</h2>
        <p>
        { /* eslint-disable-next-line jsx-a11y/anchor-is-valid */ }
          <a href="#" onClick={(e) => e?.preventDefault()} className="button">This is a button</a>
        </p>
        <p>
          { /* eslint-disable-next-line jsx-a11y/anchor-is-valid */ }
          <a href="#" onClick={(e) => e?.preventDefault()}>This is an a (anchor)</a>
        </p>
        <p>
          This is a p (paragraph)
        </p>
        <ul>
          <li>This is an li (list item) in a ul (unordered/bulleted list)</li>
          <li>This is another list item in that list</li>
          <li>
            This is a wrapped
            <br />
            item in that list
          </li>
        </ul>
        <ol>
          <li>This is an li (list item) in an ol (ordered/numbered list)</li>
          <li>This is another list item in that list</li>
          <li>
            This is a wrapped
            <br />
            item in that list
          </li>
        </ol>
        <div>
          <p>This is a table</p>
          <table>
            <thead>
              <tr>
                <th>
                  Header 1
                </th>
                <th>
                  Header 2
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Value 1</td>
                <td>Value 2</td>
              </tr>
              <tr>
                <td>Value 3</td>
                <td>Value 4</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

const meta = {
  title: 'Theme/Styles',
  component: Styles,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    // layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof Styles>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
