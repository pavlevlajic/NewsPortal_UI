import PostCardLikeAndComment from "@/components/PostCardLikeAndComment/PostCardLikeAndComment"
import PostCardSaveAction from "@/components/PostCardSaveAction/PostCardSaveAction"
import { getHref } from "@/constants/contants"
import { HeadlineType } from "@/constants/headlineType"
import placeholderImage from "@/images/placeholder-small.png"
import { ArticlePreviewViewModel } from "@/models/article/articlePreviewViewModel"
import { Route } from "next"
import Image from "next/image"
import Link from "next/link"
import { FC, useState } from "react"
import ArticleCategoryBadgeList from "../CategoryBadgeList/ArticleCategoryBadgeList"
import ArticleFeaturedMedia from "../PostFeaturedMedia/ArticleFeaturedMedia"
import ArticleFeaturedIcon from "../PostTypeFeaturedIcon/ArticleFeaturedIcon"

interface Card4Props {
    className?: string
    ratio?: string
    article: ArticlePreviewViewModel
    hoverClass?: string
}

const Card4: FC<Card4Props> = ({
    className = "h-full",
    ratio = "aspect-w-3 aspect-h-3 sm:aspect-h-4",
    article,
    hoverClass = "",
}) => {
    const [isHover, setIsHover] = useState<boolean>(false)

    const {
        articleId,
        title,
        slug,
        categoryName,
        formattedDate,
        headlineTypeName,
        singlePhoto,
        singleAudio,
        singleVideo,
        authorFirstName,
        authorLastName,
        authorUserName,
    } = article

    const renderMeta = () => {
        return (
            <div className="inline-flex items-center text-xs text-neutral-300">
                <div className="block ">
                    <h2 className="block text-base sm:text-lg font-semibold text-white ">
                        <span className="line-clamp-2" title={title}>
                            {title}
                        </span>
                    </h2>
                    <Link
                        href={("/author/" + authorUserName) as Route}
                        className="flex mt-2.5 relative"
                    >
                        <span className="block text-neutral-200 hover:text-white font-medium truncate">
                            {authorFirstName} {authorLastName}
                        </span>
                        <span className="mx-[6px] font-medium">·</span>
                        <span className="font-normal truncate">
                            {formattedDate}
                        </span>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div
            className={`nc-Card4 relative flex flex-col group rounded-3xl overflow-hidden z-0 ${hoverClass} ${className}`}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            {!article.articleId ? (
                <PulseLoader className={className} ratio={ratio} />
            ) : (
                <>
                    <div className="absolute inset-x-0 top-0 p-3 flex items-center justify-between transition-all opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 duration-300">
                        <PostCardLikeAndComment className="relative" />
                        <PostCardSaveAction
                            hidenReadingTime
                            className="relative"
                        />
                    </div>
                    <div
                        className={`flex items-start relative w-full ${ratio}`}
                    ></div>
                    {headlineTypeName === HeadlineType.SingleAudio ||
                    headlineTypeName === HeadlineType.MultiplePhoto ||
                    headlineTypeName === HeadlineType.SingleVideo ? (
                        <div className="absolute inset-0">
                            <ArticleFeaturedMedia
                                article={article}
                                isHover={isHover}
                            />
                        </div>
                    ) : (
                        <Link href={getHref(headlineTypeName, slug)}>
                            <Image
                                fill
                                alt=""
                                className="object-cover w-full h-full rounded-3xl"
                                src={
                                    singlePhoto?.fileUrl ??
                                    singleVideo?.thumbnailUrl ??
                                    singleAudio?.thumbnailUrl ??
                                    placeholderImage
                                }
                                sizes="(max-width: 600px) 480px, 500px"
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
                    <Link
                        href={getHref(headlineTypeName, slug)}
                        className="absolute z-10 bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black opacity-50"
                    ></Link>
                    <div className="absolute z-20 bottom-0 inset-x-0 p-4 flex flex-col flex-grow">
                        <Link
                            href={getHref(headlineTypeName, slug)}
                            className="absolute inset-0"
                        ></Link>
                        <div className="mb-3">
                            <ArticleCategoryBadgeList
                                categoryName={article.categoryName}
                                categoryColorName={article.categoryColorName}
                                categorySlug={article.categorySlug}
                            />
                        </div>
                        {renderMeta()}
                    </div>
                </>
            )}
        </div>
    )
}

export default Card4

const PulseLoader = ({
    className,
    ratio,
}: {
    className: string
    ratio: string
}) => {
    return (
        <div className={`${className} ${ratio} h-full`}>
            <div
                className={`animate-pulse rounded-xl bg-gray-500 h-full w-full flex flex-col justify-end`}
            >
                <div className="p-4 space-y-4 animate-pulse">
                    <div className="space-y-2">
                        <div
                            className="h-6 bg-gray-200 w-1/2"
                            style={{ borderRadius: "0.125rem" }}
                        ></div>
                        <div
                            className="h-8 bg-gray-200 w-6/7"
                            style={{ borderRadius: "0.125rem" }}
                        ></div>
                        <div
                            className="h-4 bg-gray-200 w-5/6"
                            style={{ borderRadius: "0.125rem" }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
