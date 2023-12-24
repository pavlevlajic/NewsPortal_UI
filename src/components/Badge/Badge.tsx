import { TwMainColor } from "@/data/types"
import { Route } from "@/routers/types"
import Link from "next/link"
import { FC, ReactNode } from "react"

export interface BadgeProps {
    className?: string
    name: ReactNode
    color?: TwMainColor
    href?: Route
}

const Badge: FC<BadgeProps> = ({
    className = "relative",
    name,
    color = "blue",
    href,
}) => {
    const getColorClass = (hasHover = true) => {
        switch (color) {
            case "blue":
                return `text-blue-800 bg-blue-100 ${
                    hasHover ? "hover:bg-blue-800" : ""
                }`
            case "slate":
                return `text-slate-800 bg-slate-100 ${
                    hasHover ? "hover:bg-slate-800" : ""
                }`
            case "rose":
                return `text-rose-800 bg-rose-100 ${
                    hasHover ? "hover:bg-rose-800" : ""
                }`
            case "sky":
                return `text-sky-800 bg-sky-100 ${
                    hasHover ? "hover:bg-sky-800" : ""
                }`
            case "amber":
                return `text-amber-800 bg-amber-100 ${
                    hasHover ? "hover:bg-amber-800" : ""
                }`
            case "violet":
                return `text-violet-800 bg-violet-100 ${
                    hasHover ? "hover:bg-violet-800" : ""
                }`
            case "gray":
                return `text-gray-800 bg-gray-100 ${
                    hasHover ? "hover:bg-gray-800" : ""
                }`
            case "pink":
                return `text-pink-800 bg-pink-100 ${
                    hasHover ? "hover:bg-pink-800" : ""
                }`
            case "indigo":
                return `text-indigo-800 bg-indigo-100 ${
                    hasHover ? "hover:bg-indigo-800" : ""
                }`
            case "purple":
                return `text-purple-800 bg-purple-100 ${
                    hasHover ? "hover:bg-purple-800" : ""
                }`
            case "neutral":
                return `text-neutral-800 bg-neutral-100 ${
                    hasHover ? "hover:bg-neutral-800" : ""
                }`
            case "zinc":
                return `text-zinc-800 bg-zinc-100 ${
                    hasHover ? "hover:bg-zinc-800" : ""
                }`
            case "fuchsia":
                return `text-fuchsia-800 bg-fuchsia-100 ${
                    hasHover ? "hover:bg-fuchsia-800" : ""
                }`
            case "stone":
                return `text-stone-800 bg-stone-100 ${
                    hasHover ? "hover:bg-stone-800" : ""
                }`
            case "cyan":
                return `text-cyan-800 bg-cyan-100 ${
                    hasHover ? "hover:bg-cyan-800" : ""
                }`
            case "lime":
                return `text-lime-800 bg-lime-100 ${
                    hasHover ? "hover:bg-lime-800" : ""
                }`
            case "yellow":
                return `text-yellow-800 bg-yellow-100 ${
                    hasHover ? "hover:bg-yellow-800" : ""
                }`
            case "green":
                return `text-green-800 bg-green-100 ${
                    hasHover ? "hover:bg-green-800" : ""
                }`
            case "red":
                return `text-red-800 bg-red-100 ${
                    hasHover ? "hover:bg-red-800" : ""
                }`
            case "orange":
                return `text-orange-800 bg-orange-100 ${
                    hasHover ? "hover:bg-orange-800" : ""
                }`
            case "teal":
                return `text-teal-800 bg-teal-100 ${
                    hasHover ? "hover:bg-teal-800" : ""
                }`
            case "emerald":
                return `text-emerald-800 bg-emerald-100 ${
                    hasHover ? "hover:bg-emerald-800" : ""
                }`
            default:
                return `text-pink-800 bg-pink-100 ${
                    hasHover ? "hover:bg-pink-800" : ""
                }`
        }
    }

    const CLASSES =
        "nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs " +
        className
    return !!href ? (
        <Link
            href={href || "/"}
            className={`transition-colors hover:text-white duration-300 ${CLASSES} ${getColorClass()}`}
        >
            {name}
        </Link>
    ) : (
        <span className={`${CLASSES} ${getColorClass(false)} `}>{name}</span>
    )
}

export default Badge
