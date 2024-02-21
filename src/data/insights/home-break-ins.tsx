import React from 'react';
import { Insight } from './type';

const HomeBreakIns = new Insight({
  slug: 'home-break-ins',
  title: 'Home Break-Ins',
  intro: 'What are the odds that your home will be broken into?',
  publishDate: new Date(2024, 2, 15, 19, 29, 15),
  content: <>Hi.</>,
});

export default HomeBreakIns;
