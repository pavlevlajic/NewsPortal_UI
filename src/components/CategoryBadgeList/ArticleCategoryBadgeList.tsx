import Badge from "@/components/Badge/Badge"
import { FC } from "react"

export interface CategoryBadgeListProps {
    className?: string
    itemClass?: string
    categories: string[]
}

const ArticleCategoryBadgeList: FC<CategoryBadgeListProps> = ({
    className = "flex flex-wrap space-x-2",
    itemClass,
    categories,
}) => {
    return (
        <div
            className={`nc-CategoryBadgeList ${className}`}
            data-nc-id="CategoryBadgeList"
        >
            {categories.map((x, i) => (
                <Badge
                    className={itemClass}
                    key={i}
                    name={x}
                    // href={x.href}
                    // color={x.color as any}
                />
            ))}
        </div>
    )
}

export default ArticleCategoryBadgeList
