"use client"

import { getHref } from "@/constants/contants"
import { HeadlineType } from "@/constants/headlineType"
import placeholderImage from "@/images/placeholder-small.png"
import { ArticlePreviewViewModel } from "@/models/article/articlePreviewViewModel"
import Image from "next/image"
import Link from "next/link"
import { FC, useState } from "react"
import ArticleCategoryBadgeList from "../CategoryBadgeList/ArticleCategoryBadgeList"
import ArticleFeaturedMedia from "../PostFeaturedMedia/ArticleFeaturedMedia"
import ArticleFeaturedIcon from "../PostTypeFeaturedIcon/ArticleFeaturedIcon"

export interface Card5Props {
    className?: string
    article: ArticlePreviewViewModel
}

const Card5: FC<Card5Props> = ({ className = "h-full", article }) => {
    const [isHover, setIsHover] = useState<boolean>(false)

    const {
        title,
        slug,
        headlineTypeName,
        formattedDate,
        singleAudio,
        singlePhoto,
        singleVideo,
        categoryName,
        categoryColorName,
        categorySlug,
    } = article

    return !article.articleId ? (
        <div
            className={`nc-Card5 relative flex group items-center p-3 rounded-3xl border border-neutral-200 
                dark:border-neutral-700 bg-white dark:bg-neutral-900 h-fit`}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <PulseLoader />
        </div>
    ) : (
        <div
            className={`nc-Card5 relative flex group items-center p-3 rounded-3xl border border-neutral-200 
                dark:border-neutral-700 bg-white dark:bg-neutral-900 ${className}`}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <div className="w-1/4 flex-shrink-0">
                {headlineTypeName === HeadlineType.SingleAudio ||
                headlineTypeName === HeadlineType.MultiplePhoto ||
                headlineTypeName === HeadlineType.SingleVideo ? (
                    <div className="block h-0 aspect-w-1 aspect-h-1 relative rounded-full overflow-hidden shadow-lg">
                        <ArticleFeaturedMedia
                            article={article}
                            isHover={isHover}
                            isRelative={false}
                        />
                    </div>
                ) : (
                    <Link
                        href={getHref(headlineTypeName, slug)}
                        className="block h-0 aspect-w-1 aspect-h-1 relative rounded-full overflow-hidden shadow-lg"
                    >
                        <Image
                            className="object-cover w-full h-full rounded-3xl"
                            src={
                                singlePhoto?.fileUrl ??
                                singleVideo?.thumbnailUrl ??
                                singleAudio?.thumbnailUrl ??
                                placeholderImage
                            }
                            fill
                            alt={title}
                            sizes="100px"
                        />
                        <ArticleFeaturedIcon
                            className="absolute top-3 left-3 group-hover:hidden"
                            headlineTypeName={headlineTypeName}
                            wrapSize="w-7 h-7"
                            iconSize="w-4 h-4"
                        />
                        <span className="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    </Link>
                )}
            </div>

            <div className="flex flex-col justify-between h-full flex-grow ms-4 gap-y-3.5">
                <h2 className="nc-card-title block font-semibold text-sm sm:text-lg">
                    <Link
                        href={getHref(headlineTypeName, slug)}
                        className="line-clamp-2"
                        title={title}
                    >
                        {title}
                    </Link>
                </h2>

                <span className="text-xs text-neutral-500 dark:text-neutral-400">
                    {formattedDate}
                </span>

                <ArticleCategoryBadgeList
                    categoryName={categoryName}
                    categoryColorName={categoryColorName}
                    categorySlug={categorySlug}
                />
            </div>
        </div>
    )
}

export default Card5

const PulseLoader = () => {
    return (
        <div className="flex w-full">
            <div className="w-24 h-24 sm:w-44 sm:h-44 md:w-36 md:h-36 flex-shrink-0 rounded-full overflow-hidden shadow-lg bg-gray-300 animate-pulse"></div>

            <div className="flex flex-col justify-around flex-grow ms-4 space-y-2">
                <div className="h-12 bg-gray-300 rounded w-5/6"></div>
                <div className="h-4 bg-gray-300 rounded w-2/5"></div>
                <div className="h-6 bg-gray-300 rounded w-1/3"></div>
            </div>
        </div>
    )
}
