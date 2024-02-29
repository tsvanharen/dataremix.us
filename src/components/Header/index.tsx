'use client';

import { Route } from '@/utils/routes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Logo from '../Logo';

const navItems = [
  { href: Route.HOME, text: 'Home' },
  { href: Route.INSIGHTS, text: 'Insights' },
  { href: Route.INSIGHTS_CATEGORIES, text: 'Categories' },
  { href: Route.FAQS, text: 'FAQs' },
];

export function HeaderInner(
  {
    pathName,
  }: {
    pathName: string,
  },
) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const showLogo = (pathName !== Route.HOME);

  return (
    <header className="w-full border-b-4 border-slate-700">
      <div className="max-w-5xl mx-auto items-center justify-center flex">
        <div className="flex-1 pl-8">
          {showLogo && <Logo />}
        </div>
        <nav className="hidden lg:block">
          {/* Desktop Nav */}
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
        <div className="lg:flex-1 pr-8">
          <nav className="block lg:hidden pt-4">
            {/* Mobile Nav */}
            <button
              type="button"
              onClick={() => setIsMobileNavOpen((prev) => !prev)}
              title="Open menu"
            >
              <span area-hidden="true" className="hidden">Open menu</span>
              <span className="block h-0.5 w-8 bg-gray-600" />
              <span className="block h-0.5 w-8 bg-gray-600 my-2" />
              <span className="block h-0.5 w-8 bg-gray-600" />
            </button>

            <div className={isMobileNavOpen ? 'absolute w-full h-screen top-0 left-0 bg-white z-10 flex flex-col justify-evenly items-center' : 'hidden'}>
              <button
                type="button"
                className="absolute top-0 right-0 px-6 py-6"
                onClick={() => setIsMobileNavOpen(false)}
                title="Close menu"
              >
                <span area-hidden="true" className="hidden">Close menu</span>
                <svg
                  className="h-8 w-8 text-slate-800"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
              <ul className="flex flex-col items-center justify-between min-h-[250px]">
                {
                  navItems.map((navItem) => {
                    const linkStyle = (pathName === navItem.href ? 'current' : '');

                    return (
                      <li key={navItem.href} className="p-0">
                        <Link href={navItem.href} title={navItem.text} className={linkStyle}>
                          {navItem.text}
                        </Link>
                      </li>
                    );
                  })
                }
              </ul>
            </div>
          </nav>
        </div>
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
