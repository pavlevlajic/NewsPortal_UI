"use client"

import { getHref } from "@/constants/contants"
import { ArticlePreviewViewModel } from "@/models/article/articlePreviewViewModel"
import Link from "next/link"
import { FC, useState } from "react"
import ArticleCategoryBadgeList from "../CategoryBadgeList/ArticleCategoryBadgeList"
import ArticleCardMetaV2 from "../PostCardMeta/ArticleCardMetaV2"
import ArticleFeaturedMedia from "../PostFeaturedMedia/ArticleFeaturedMedia"

interface Card3Props {
    className?: string
    article: ArticlePreviewViewModel
    ratio?: string
    hiddenAuthor?: boolean
}

const Card3: FC<Card3Props> = ({
    className = "h-full",
    article,
    hiddenAuthor = false,
    ratio = "aspect-w-4 aspect-h-3",
}) => {
    const { title, slug, categoryName, formattedDate, headlineTypeName } =
        article

    const [isHover, setIsHover] = useState(false)

    return (
        <div
            className={`nc-Cards-Card3 relative flex flex-col group rounded-3xl overflow-hidden bg-white dark:bg-neutral-900 ${className}`}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            //
        >
            {!article.articleId ? (
                <PulseLoader className={className} ratio={ratio} />
            ) : (
                <>
                    <div
                        className={`block flex-shrink-0 relative w-full rounded-t-3xl overflow-hidden z-10 ${ratio}`}
                    >
                        <div>
                            <ArticleFeaturedMedia
                                article={article}
                                isHover={isHover}
                            />
                        </div>
                    </div>

                    <Link
                        href={getHref(headlineTypeName, slug)}
                        className="absolute inset-0"
                    ></Link>

                    <span className="absolute top-3 inset-x-3 z-10">
                        <ArticleCategoryBadgeList
                            categoryName={article.categoryName}
                            categoryColorName={article.categoryColorName}
                            categorySlug={article.categorySlug}
                        />
                    </span>

                    <div className="p-4 flex flex-col space-y-3">
                        {!hiddenAuthor ? (
                            <ArticleCardMetaV2 meta={article} />
                        ) : (
                            <span className="text-xs text-neutral-500">
                                {formattedDate}
                            </span>
                        )}
                        <h3 className="nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100">
                            <span className="line-clamp-2" title={title}>
                                {title}
                            </span>
                        </h3>
                        {/* <div className="flex items-end justify-between mt-auto">
                            <PostCardLikeAndComment
                                className="relative"
                                likeCount={numberOfReactions}
                                commentCount={numberOfComments}
                                hiddenCommentOnMobile={false}
                            />
                            <PostCardSaveAction className="relative" />
                        </div> */}
                    </div>
                </>
            )}
        </div>
    )
}

export default Card3

interface PulseLoaderProps {
    className?: string
    ratio?: string
}

const PulseLoader: React.FC<PulseLoaderProps> = ({
    className,
    ratio = "aspect-w-4 aspect-h-3",
}) => {
    return (
        <div className={`rounded-3xl overflow-hidden bg-gray-500 ${className}`}>
            <span className="absolute top-3 inset-x-3 z-10">
                <div className="h-6 bg-gray-500 rounded w-2/4"></div>
            </span>
            <div className={`animate-pulse flex flex-col ${ratio}`}>
                <div className="bg-gray-300 flex-grow"></div>{" "}
                {/* Placeholder for media */}
            </div>
            <div className="p-4 space-y-3">
                <div className="h-3 bg-gray-300 rounded w-1/2"></div>{" "}
                {/* Placeholder for title */}
                <div className="h-5 bg-gray-300 rounded w-6/7"></div>{" "}
                <div className="h-5 bg-gray-300 rounded w-5/6"></div>{" "}
                {/* <div className="h-6 bg-gray-300 rounded w-5/6"></div>{" "} */}
                {/* Placeholder for date or author */}
                {/* <div className="flex justify-between">
                    <div className="flex h-8 w-full space-x-2">
                        <div className="h-8 bg-gray-300 rounded w-16"></div>{" "}
                        <div className="h-8 bg-gray-300 rounded w-16"></div>{" "}
                    </div>
                    <div className="h-8 bg-gray-300 rounded w-10"></div>{" "}
                </div> */}
            </div>
        </div>
    )
}
