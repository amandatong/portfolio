import { WORK_LIST } from "../pages/work";
import Link from "next/link";

export default function WorkNav({active}) {
    return(
        <div className="work-nav-wrap">
            <h3> More Projects </h3>
            <div className="work-nav">
            {WORK_LIST.map(({id, title}, i) => {
                return(
                    <span key={i} className={id === active ? "active" : null}>
                        <Link href={`/work/${id}`}>{title}</Link>
                    </span>  
                )
            })}
            </div>
        </div>
    )
}