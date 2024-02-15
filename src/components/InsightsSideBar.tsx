import { Route } from "@/utils/routes";
import Link from "next/link";

/* use this on individual insight pages 
set current page style like the header nav
*/
export default function InsightsSideBar() {
  return (
    <aside role="navigation" className="bg-slate-200 rounded-md border-solid border-slate-900 p-4 w-64 mr-8">
      <h3>Insights</h3>
      <ul>
        <li><Link href={Route.INSIGHT_HOME_BREAK_INS} title="Home Break-Ins">Home Break-Ins</Link></li>
      </ul>
    </aside>
  )
}

// aside[role=navigation] {
//   @apply   h-screen sticky top-0 p-4
// }

// aside[role=navigation] h3 {
//   @apply uppercase text-sm font-bold mb-2
// }

// aside[role=navigation] ul li {
//   @apply mx-4 whitespace-nowrap hover:border-b-2 hover:mb-1 hover:border-spacing-1 hover:border-b-slate-900
// }