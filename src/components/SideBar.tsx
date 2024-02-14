import { Route } from "@/utils/routes";
import Link from "next/link";

export default function SideBar() {
  return (
    <aside role="navigation" className="hidden">
      <h3>Insights</h3>
      <ul>
        <li><Link href={Route.INSIGHT_HOME_BREAK_INS} title="Home Break-Ins">Home Break-Ins</Link></li>
      </ul>
    </aside>
  )
}