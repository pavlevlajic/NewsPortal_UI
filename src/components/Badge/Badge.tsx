import { Route } from "@/routers/types"
import Link from "next/link"
import { FC, ReactNode } from "react"

export interface BadgeProps {
    className?: string
    name: ReactNode
    color?: string
    href?: Route
}

const Badge: FC<BadgeProps> = ({
    className = "relative",
    name,
    color = "blue",
    href,
}) => {
    const CLASSES =
        "nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs " +
        className

    console.log({ href, color })

    return !!href ? (
        <Link
            href={href || "/"}
            className={`transition-colors hover:text-white duration-300 ${CLASSES} 
                ${`text-${color}-800 bg-${color}-100 hover:bg-${color}-800`}`}
        >
            {name}
        </Link>
    ) : (
        <span className={`${CLASSES} text-${color}-800 bg-${color}-100}`}>
            {name}
        </span>
    )
}

export default Badge
