"use client"

import { getHref } from "@/constants/contants"
import { HeadlineType } from "@/constants/headlineType"
import placeholderImage from "@/images/placeholder-small.png"
import { ArticlePreviewViewModel } from "@/models/article/articlePreviewViewModel"
import { PauseIcon, PlayIcon } from "@heroicons/react/24/solid"
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
    } = article

    const IS_AUDIO = headlineTypeName === HeadlineType.SingleAudio

    const renderDefaultBtnListen = (state?: "playing") => {
        return (
            <div className="inline-flex items-center mt-3 pe-4 py-0.5 hover:ps-0.5 cursor-pointer rounded-full transition-all hover:bg-primary-50 dark:hover:bg-neutral-900">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-50 dark:bg-neutral-800 text-primary-6000 dark:text-primary-200">
                    {state === "playing" ? (
                        <PauseIcon className="w-5 h-5" />
                    ) : (
                        <PlayIcon className="w-5 h-5 rtl:rotate-180" />
                    )}
                </span>

                <span className="ms-3 text-xs sm:text-sm font-medium">
                    {state === "playing" ? "Now playing" : "Listen now"}
                </span>
            </div>
        )
    }

    return !article.articleId ? (
        <div
            className={`nc-Card5 relative flex group items-center p-3 rounded-3xl border border-neutral-200 
                dark:border-neutral-700 bg-white dark:bg-neutral-900 h-fit`}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <PulseLoader className={className} />
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

            <div className="flex flex-col flex-grow ms-4 gap-y-3.5">

{/* Checkpoint: */}
{/* Adding category badge in this card */}


                <h2
                    className={`nc-card-title block font-semibold text-sm sm:text-lg`}
                >
                    <Link
                        href={getHref(headlineTypeName, slug)}
                        className={IS_AUDIO ? `line-clamp-1` : "line-clamp-2"}
                        title={title}
                    >
                        {title}
                    </Link>
                </h2>

                <span className="text-xs text-neutral-500 dark:text-neutral-400">
                    {formattedDate}
                </span>

                {/* {IS_AUDIO && (
                    <ButtonPlayMusicPlayer
                        post={{
                            ...defaultPostData,
                            id: article.articleId,
                            featuredImage: singleAudio?.thumbnailUrl ?? "",
                            title: title,
                            postType: "audio", // SingleAudio
                            audioUrl: singleAudio?.fileUrl,
                            categories: [
                                {
                                    ...defaultTaxonomy,
                                    name: categoryName,
                                },
                            ],
                        }}
                        renderDefaultBtn={() => renderDefaultBtnListen()}
                        renderPlayingBtn={() =>
                            renderDefaultBtnListen("playing")
                        }
                    />
                )} */}
            </div>
            

            <div className="absolute right-3 bottom-3 z-20">
                    <ArticleCategoryBadgeList
                        categoryName={article.categoryName}
                        categoryColorName={article.categoryColorName}
                        categorySlug={article.categorySlug}
                    />
                </div>
        </div>
    )
}

export default Card5

const PulseLoader: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <div className={`flex w-full`}>
            {/* Placeholder for image or media */}
            <div className="sm:w-44 sm:h-44 md:w-36 md:h-36  flex-shrink-0 rounded-full overflow-hidden shadow-lg bg-gray-300 animate-pulse"></div>

            <div className="flex flex-col flex-grow ms-4 space-y-2">
                <div className="h-8 bg-gray-300 rounded w-5/6"></div>
                <div className="h-6 bg-gray-300 rounded w-3/5"></div>
                <div className="h-4 bg-gray-300 rounded w-1/3"></div>
            </div>
        </div>
    )
}
