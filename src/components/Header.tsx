"use client"

import { Route } from "@/utils/routes";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import Logo, { Variant } from "./Logo";

const navItems = [
  {href: Route.HOME, text: 'Home'},
  {href: Route.INSIGHTS, text: 'Insights'},
  {href: Route.FAQS, text: 'FAQs'},
]

export default function Header(){
  const pathName = usePathname();
  const showLogo = (pathName !== Route.HOME)

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
                  <li key={navItem.href}><Link href={navItem.href} title={navItem.text} className={linkStyle}>{navItem.text}</Link></li>
                )
              })
            }
          </ul>
        </nav>
        <div className="flex-1"></div>
          {/* 
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By Vercel
            </a>
          </div> */}
        </div>
      </header>
  )
}