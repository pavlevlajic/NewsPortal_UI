"use client"

import ArticleCategoryBadgeList from "@/components/CategoryBadgeList/ArticleCategoryBadgeList"
import ArticlePostMeta2 from "@/components/PostMeta2/ArticlePostMeta2"
import { ArticleDetailViewModel } from "@/models/article/articleDetailViewModel"
import { FC } from "react"
import SingleArticleMetaAction2 from "./SingleArticleMetaAction2"
import SingleTitle from "./SingleTitle"

export interface SingleArticleHeaderProps {
    titleMainClass?: string
    className?: string
    article: ArticleDetailViewModel
}

const SingleArticleHeader: FC<SingleArticleHeaderProps> = ({
    titleMainClass,
    className = "",
    article,
}) => {
    return (
        <>
            <div className={`nc-SingleArticleHeader ${className}`}>
                <div className="space-y-5">
                    <ArticleCategoryBadgeList
                        itemClass="!px-3"
                        categoryName={article.categoryName}
                        categoryColorName={article.categoryColorName}
                        categorySlug={article.categorySlug}
                    />

                    <SingleTitle
                        mainClass={titleMainClass}
                        title={
                            article.title ||
                            "Trending web & landing page designs in 2023"
                        }
                    />

                    <span className="block text-base text-neutral-500 md:text-lg dark:text-neutral-400 pb-1">
                        {article.briefContent
                            ? article.briefContent
                            : `Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Perspiciatis tempora obcaecati error ipsum
                            voluptatibus sed adipisci ut maiores nesciunt quam.`}
                    </span>

                    <div className="w-full border-b border-neutral-200 dark:border-neutral-700"></div>

                    <div className="flex flex-col sm:flex-row justify-between sm:items-end space-y-5 sm:space-y-0 sm:space-x-5 rtl:space-x-reverse">
                        <ArticlePostMeta2
                            size="large"
                            className="leading-none flex-shrink-0"
                            avatarRounded="rounded-full shadow-inner"
                            meta={article}
                        />
                        <SingleArticleMetaAction2 meta={article} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleArticleHeader
