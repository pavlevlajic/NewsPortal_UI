import Badge from "@/components/Badge/Badge"
import { TwMainColor } from "@/data/types"
import { Route } from "next"
import { FC } from "react"

interface ArticleCategoryBadgeListProps {
    className?: string
    itemClass?: string
    categoryName: string
    categoryColorName: string
    categorySlug: string
}

const ArticleCategoryBadgeList: FC<ArticleCategoryBadgeListProps> = ({
    className = "flex flex-wrap space-x-2",
    itemClass,
    categoryName,
    categoryColorName,
    categorySlug,
}) => {
    return (
        <div
            className={`nc-CategoryBadgeList ${className}`}
            data-nc-id="CategoryBadgeList"
        >
            <Badge
                className={itemClass}
                name={categoryName}
                href={("/archive/" + categorySlug) as Route}
                color={categoryColorName as TwMainColor}
            />
        </div>
    )
}

export default ArticleCategoryBadgeList
