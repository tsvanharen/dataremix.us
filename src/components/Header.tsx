import { Routes } from "@/utils/routes";
import Link from "next/link";
import Logo from "./Logo";

export default function Header({
  logoClassName, 
  
}: {
  logoClassName?: string, 
}){
  return (
    <header className="mx-auto max-w-5xl w-full">
      <div className="z-10 max-w-5xl w-full items-center lg:flex">
        <div className="fixed left-0 top-0 flex w-full pb-6 pt-8 lg:static lg:w-auto pr-8">
          <Logo logoClassName={logoClassName} />
        </div>
        <nav>
          <ul>
            <li><Link href={Routes.HOME} title="Home">Home</Link></li>
            <li><Link href={Routes.INSIGHTS} title="Insights">Insights</Link></li>
          </ul>
        </nav>
        
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