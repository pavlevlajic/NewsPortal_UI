import CardCategory1 from "@/components/CardCategory1/CardCategory1"
import WidgetHeading1 from "@/components/WidgetHeading1/WidgetHeading1"
import placeholderImage from "@/images/placeholder-small.png"
import { CategoryViewModel } from "@/models/article/categoryViewModel"
import { Route } from "next"
import { FC } from "react"

interface ArticleWidgetCategoriesProps {
    className?: string
    categories: CategoryViewModel[]
}

const ArticleWidgetCategories: FC<ArticleWidgetCategoriesProps> = ({
    className = "bg-neutral-100 dark:bg-neutral-800",
    categories,
}) => {
    return (
        <div
            className={`nc-ArticleWidgetCategories rounded-3xl  overflow-hidden ${className}`}
        >
            <WidgetHeading1
                title="✨ Trending topic"
                viewAll={{ label: "View all", href: "/#" }}
            />
            <div className="flow-root">
                <div className="flex flex-col divide-y divide-neutral-200 dark:divide-neutral-700">
                    {categories.map((x, i) => (
                        <CardCategory1
                            className="p-4 xl:p-5 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                            key={x.id}
                            taxonomy={{
                                id: x.id,
                                href: ("/archive/" + x.slug) as Route,
                                name: x.name,
                                taxonomy: "category",
                                color: x.colorName,
                                count: x.articleCount,
                                thumbnail: x.frontPhotoUrl ?? placeholderImage,
                            }}
                            size="normal"
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ArticleWidgetCategories
