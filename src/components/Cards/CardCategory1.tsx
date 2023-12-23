import NcImage from "@/components/NcImage/NcImage"
import { CategoryViewModel } from "@/models/article/categoryViewModel"
import Link from "next/link"
import { FC } from "react"

export interface CardCategory1Props {
    className?: string
    category: CategoryViewModel
    size?: "large" | "normal"
}

const CardCategory1: FC<CardCategory1Props> = ({
    className = "",
    size = "normal",
    category,
}) => {
    const { count, name, href = "/", thumbnail } = category

    return (
        <Link
            href={href}
            className={`nc-CardCategory1 flex items-center ${className}`}
        >
            <NcImage
                alt=""
                containerClassName={`relative flex-shrink-0 ${
                    size === "large" ? "w-20 h-20" : "w-12 h-12"
                } rounded-lg me-4 overflow-hidden`}
                src={thumbnail || ""}
                fill
                className="object-cover"
                sizes="80px"
            />
            <div>
                <h2
                    className={`${
                        size === "large" ? "text-lg" : "text-base"
                    } nc-card-title text-neutral-900 dark:text-neutral-100 text-sm sm:text-base font-medium sm:font-semibold`}
                >
                    {name}
                </h2>
                <span
                    className={`${
                        size === "large" ? "text-sm" : "text-xs"
                    } block mt-[2px] text-neutral-500 dark:text-neutral-400`}
                >
                    {count} Articles
                </span>
            </div>
        </Link>
    )
}

export default CardCategory1
