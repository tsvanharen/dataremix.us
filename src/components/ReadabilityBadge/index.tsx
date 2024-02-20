export interface ReadabilityBadgeParams {
  ease: number,
  twClassName: string,
  usGradeLevel: string,
  description: string,
}

export default function ReadabilityBadge({
  ease,
  twClassName,
  usGradeLevel,
  description,
}: ReadabilityBadgeParams) {
  return (
    <span title={`${usGradeLevel} level. ${description}`} className={`${twClassName} inline-block w-6 h-6 text-center rounded-full leading-5`}>{ease}</span>
  );
}
