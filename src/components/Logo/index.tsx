import { logoFont } from '@/styles/fonts';
import { Route } from '@/utils/routes';
import Link from 'next/link';

export enum Variant {
  HomePage = 'homePage', // larger logo
}

export default function Logo({
  variant = undefined,
}: {
  variant?: Variant
}) {
  const sharedLinkStyle = 'whitespace-nowrap uppercase tracking-[-0.1rem] font-light hover:no-underline';
  const sharedSlashStyle = 'inline-block relative text-stone-600';

  let linkStyle = 'text-3xl';
  let slashStyle = 'text-4xl top-[0.15rem] scale-125';

  if (variant === Variant.HomePage) {
    linkStyle = 'md:text-7xl sm:text-5xl cursor-default';
    slashStyle = 'md:text-8xl sm:text-6xl md:top-[0.45rem] sm:top-[0.3rem]';
  }

  const text = (
    <>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-stone-600 pr-2">Data</span>
      <span className={`${sharedSlashStyle} ${slashStyle}`}>/</span>
      <span className="inline-block scale-x-[-1] text-transparent bg-clip-text bg-gradient-to-l from-stone-600 to-purple-700 pr-2">Remix</span>
    </>
  );

  return (
    <>
      {variant !== Variant.HomePage && (
      <Link
        href={Route.HOME}
        title="Data/Remix Home"
        className={`${logoFont.className} ${sharedLinkStyle} ${linkStyle}`}
      >
        {text}
      </Link>
      )}

      {variant === Variant.HomePage && (
      <div
        className={`${logoFont.className} ${sharedLinkStyle} ${linkStyle}`}
      >
        {text}
      </div>
      )}
    </>
  );
}
