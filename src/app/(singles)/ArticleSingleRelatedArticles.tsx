import Card3 from "@/components/Cards/Card3"
import Heading from "@/components/Heading/Heading"
import { ArticlePreviewViewModel } from "@/models/article/articlePreviewViewModel"
import { FC } from "react"

interface ArticleSingleRelatedArticlesProps {
    relatedArticles: ArticlePreviewViewModel[]
    moreArticlesFromAuthor: ArticlePreviewViewModel[]
}

const ArticleSingleRelatedArticles: FC<ArticleSingleRelatedArticlesProps> = ({
    relatedArticles,
    moreArticlesFromAuthor,
}) => {
    return (
        <div className="relative bg-neutral-100 dark:bg-neutral-800 py-16 lg:py-28 mt-16 lg:mt-28 [ nc-section-rounded-md ]">
            {/* RELATED  */}
            <div className="container">
                <div>
                    <Heading
                        className="mb-10 text-neutral-900 dark:text-neutral-50"
                        desc=""
                    >
                        Related posts
                    </Heading>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                        {relatedArticles.map((x, i) => (
                            <Card3 key={i} article={x} hiddenAuthor />
                        ))}
                    </div>
                </div>

                {/* MORE FROM AUTHOR */}
                <div className="mt-20">
                    <Heading
                        className="mb-10 text-neutral-900 dark:text-neutral-50"
                        desc=""
                    >
                        More from author
                    </Heading>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                        {moreArticlesFromAuthor.map((x, i) => (
                            <Card3 key={i} article={x} hiddenAuthor />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleSingleRelatedArticles
