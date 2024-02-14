import { Routes } from "@/utils/routes"
import Link from "next/link"

export default function Logo({
  logoClassName, 
}: {
  logoClassName?: string, 
}) {
  return (
    <Link 
      href={Routes.HOME} 
      title="Home" 
      className={`${logoClassName} uppercase tracking-tighter text-3xl font-bold drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-gray-300 hover:text-slate-900`}
    >
      Data<span className="inline-block px-1 text-4xl">|</span><span className="inline-block scale-x-[-1]">Remix</span>
    </Link>
  )
}

// export default function Logo({
//   logoClassName1, 
//   logoClassName2
// }: {
//   logoClassName1?: string, 
//   logoClassName2?: string
// }) {
//   const nameElement = (<><span className="uppercase">Data</span><span className={`${logoClassName2} uppercase`}>Remix</span></>)

//   return (
//     <Link 
//       href={Routes.HOME} 
//       title="Home" 
//       className={`${logoClassName1} leading-none hover:scale-x-[-1] tracking-tighter text-lg font-bold transition ease-in-out delay-150 duration-500`}
//     >
//       <div className="px-4 border-b-2 border-b-black pb-1">{nameElement}</div>
//       <div className="px-4 scale-x-[-1] pt-1">{nameElement}</div>
//     </Link>
//   )
// }