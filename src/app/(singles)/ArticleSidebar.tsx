import ArticleWidgetAuthors from "@/components/WidgetAuthors/ArticleWidgetAuthors"
import ArticleWidgetCategories from "@/components/WidgetCategories/ArticleWidgetCategories"
import ArticleWidgetArticles from "@/components/WidgetPosts/ArticleWidgetArticles"
import ArticleWidgetTags from "@/components/WidgetTags/ArticleWidgetTag"
import { ArticlePreviewViewModel } from "@/models/article/articlePreviewViewModel"
import { CategoryViewModel } from "@/models/article/categoryViewModel"
import { TagViewModel } from "@/models/article/tagViewModel"
import { AuthorViewModel } from "@/models/users/authorViewModel"
import { FC } from "react"

interface ArticleSidebarProps {
    className?: string
    tags: TagViewModel[]
    categories: CategoryViewModel[]
    authors: AuthorViewModel[]
    articles: ArticlePreviewViewModel[]
}

export const ArticleSidebar: FC<ArticleSidebarProps> = ({
    className = "space-y-6 ",
    tags,
    categories,
    authors,
    articles,
}) => {
    return (
        <div className={`nc-SingleArticleSidebar ${className}`}>
            <ArticleWidgetTags tags={tags} />
            <ArticleWidgetCategories categories={categories} />
            <ArticleWidgetAuthors authors={authors} />
            <ArticleWidgetArticles articles={articles} />
        </div>
    )
}
