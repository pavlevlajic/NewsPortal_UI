import WidgetHeading1 from "@/components/WidgetHeading1/WidgetHeading1"
import { TagViewModel } from "@/models/article/tagViewModel"
import { FC } from "react"
import ArticleTag from "../Tag/ArticleTag"

interface ArticleWidgetTagsProps {
    className?: string
    tags: TagViewModel[]
}

const ArticleWidgetTags: FC<ArticleWidgetTagsProps> = ({
    className = "bg-neutral-100 dark:bg-neutral-800",
    tags,
}) => {
    return (
        <div
            className={`nc-ArticleWidgetTags rounded-3xl overflow-hidden ${className}`}
        >
            <WidgetHeading1
                title="💡 More tags"
                viewAll={{ label: "View all", href: "/#" }}
            />
            <div className="flex flex-wrap p-4 xl:p-5">
                {tags.map((x, i) => (
                    <ArticleTag className="mr-2 mb-2" key={i} tag={x} />
                ))}
            </div>
        </div>
    )
}

export default ArticleWidgetTags
