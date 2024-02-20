'use client';

import { Route } from '@/utils/routes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '../Logo';

const navItems = [
  { href: Route.HOME, text: 'Home' },
  { href: Route.INSIGHTS, text: 'Insights' },
  { href: Route.FAQS, text: 'FAQs' },
];

export function HeaderInner(
  {
    pathName,
  }: {
    pathName: string,
  },
) {
  const showLogo = (pathName !== Route.HOME);

  return (
    <header className="w-full border-b-4 border-slate-700">
      <div className="max-w-5xl mx-auto w-full items-center justify-center flex">
        <div className="flex-1">
          {showLogo && <Logo />}
        </div>
        <nav>
          <ul>
            {
              navItems.map((navItem) => {
                const linkStyle = (pathName === navItem.href ? 'current' : '');

                return (
                  <li key={navItem.href}>
                    <Link href={navItem.href} title={navItem.text} className={linkStyle}>
                      {navItem.text}
                    </Link>
                  </li>
                );
              })
            }
          </ul>
        </nav>
        <div className="flex-1" />
      </div>
    </header>
  );
}

export default function Header() {
  const pathName = usePathname();

  if (!pathName) {
    return null;
  }

  return <HeaderInner pathName={pathName} />;
}
