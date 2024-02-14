import { Route } from "@/utils/routes"
import Link from "next/link"
import { Open_Sans } from "next/font/google";

const logoFont = Open_Sans({ subsets: ["latin"] });

export enum Variant {
  Large = 'large'
}

export default function Logo({
  variant
}: {
  variant?: Variant
}) {
  let linkStyle = 'uppercase tracking-[-0.1rem] text-3xl font-light hover:no-underline';
  let slashStyle = 'inline-block text-4xl relative top-[0.15rem] text-stone-600 scale-125'

  if (variant === Variant.Large) {
    linkStyle = 'uppercase tracking-[-0.1rem] text-7xl font-light hover:no-underline cursor-default';
    slashStyle = 'inline-block text-8xl relative top-[0.45rem] text-stone-600'
  }

  const text = (<><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-stone-600 pr-2">Data</span><span className={slashStyle}>/</span><span className="inline-block scale-x-[-1] text-transparent bg-clip-text bg-gradient-to-l from-stone-600 to-purple-700 pr-2">Remix</span></>);

  return (
    <>
      {variant !== Variant.Large && <Link 
        href={Route.HOME} 
        title="Data/Remix Home" 
        className={`${logoFont.className} ${linkStyle}`}
      >
        {text}
      </Link>}

      {variant === Variant.Large && <div
        className={`${logoFont.className} ${linkStyle}`}
      >
        {text}
      </div>}
    </>
  )
}