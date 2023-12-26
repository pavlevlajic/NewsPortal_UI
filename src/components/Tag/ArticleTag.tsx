import { TagViewModel } from "@/models/article/tagViewModel"
import { FC } from "react"

interface ArticleTagProps {
    className?: string
    tag: TagViewModel
    hideCount?: boolean
}

const ArticleTag: FC<ArticleTagProps> = ({
    className = "",
    tag,
    hideCount = false,
}) => {
    return (
        /*Link*/
        <div
            className={`nc-ArticleTag inline-block bg-white hover:bg-neutral-50 text-sm text-neutral-600 dark:text-neutral-300 py-2 px-3 rounded-lg md:py-2.5 md:px-4 dark:bg-neutral-900 ${className}`}
        >
            {`${tag.name}`}
            {!hideCount && (
                <span className="text-xs font-normal">
                    {" "}
                    ({tag.articleCount})
                </span>
            )}
        </div>
    )
}

export default ArticleTag
