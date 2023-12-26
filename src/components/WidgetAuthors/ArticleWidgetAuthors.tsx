import WidgetHeading1 from "@/components/WidgetHeading1/WidgetHeading1"
import { AuthorViewModel } from "@/models/users/authorViewModel"
import { FC } from "react"
import ArticleCardAuthor from "../CardAuthor/ArticleCardAuthor"

interface ArticleWidgetAuthorsProps {
    className?: string
    authors: AuthorViewModel[]
}

const ArticleWidgetAuthors: FC<ArticleWidgetAuthorsProps> = ({
    className = "bg-neutral-100 dark:bg-neutral-800",
    authors,
}) => {
    return (
        <div
            className={`nc-ArticleWidgetAuthors rounded-3xl overflow-hidden ${className}`}
        >
            <WidgetHeading1
                title="🎭 Discover Authors"
                viewAll={{ label: "View all", href: "/#" }}
            />
            <div className="flow-root">
                <div className="flex flex-col divide-y divide-neutral-200 dark:divide-neutral-700">
                    {authors.map((x) => (
                        <ArticleCardAuthor
                            className="p-4 xl:p-5 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                            key={x.id}
                            author={x}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ArticleWidgetAuthors
