import React from 'react';
import colors from '@/styles/twColors';
import { scoreDefinitions } from '@/utils/flesch-kincaid';

export default function ReadabilityScale({
  ease,
}: {
  ease: number
}) {
  const scoreDefinition = scoreDefinitions.find((sd) => sd.ease === ease);

  if (!scoreDefinition) {
    throw new Error(`invalid reading ease: ${ease}`);
  }

  return (
    <>
      <div className="relative pb-2">
        <div className="bg-gradient-to-r from-red-800 via-lime-500 to-sky-800 h-6 w-full border-y-4 border-white rounded-full" />
        <svg className={`absolute h-6 w-6 top-0 ${scoreDefinition.twClassName}`}>
          <circle cx="12" cy="12" r="12" fill={colors.slate['800']} />
          <text x="50%" y="50%" textAnchor="middle" fill="white" dy=".3em">&#x2714;</text>
        </svg>
      </div>
      <div>
        This Insight&apos;s readability level has been evaluated as being
        {' '}
        <span className="font-bold">
          {scoreDefinition.description}
        </span>
        .
        It is suitable for individuals reading
        {' '}
        <span className="font-bold">{scoreDefinition.usGradeLevel}</span>
        .
      </div>
    </>
  );
}
