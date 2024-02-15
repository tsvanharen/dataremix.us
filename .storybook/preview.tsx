import type { Preview } from "@storybook/react";
import '@/styles/global.css';
import React from 'react'
import { baseFont } from "../src/styles/fonts";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className= { baseFont.className } >
      <Story />
      </div>
    )
  ]
};

export default preview;
