/* eslint-disable import/no-anonymous-default-export */

import { DarkModeConfig } from 'tailwindcss/types/config';

/* eslint-disable global-require */
export default {
  darkMode: 'class' as DarkModeConfig,
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  compilerOptions: {
    baseUrl: './',
  },
};
