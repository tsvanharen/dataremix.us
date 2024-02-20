import React from 'react';
import { Insight, createInsight } from './type';

export default function HomeBreakIns(): Insight {
  return createInsight({
    slug: 'home-break-ins',
    title: 'Home Break-Ins',
    publishDate: new Date(2024, 2, 15, 19, 29, 15),
    content: <>Hi.</>,
  });
}
