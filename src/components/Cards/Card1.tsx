import PostCardLikeAndComment from "@/components/PostCardLikeAndComment/PostCardLikeAndComment"
import PostCardSaveAction from "@/components/PostCardSaveAction/PostCardSaveAction"
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

export interface Card18Props {
    className?: string
    ratio?: string
    titleClass?: string
    article: ArticlePreviewViewModel
    hoverClass?: string
    showCategories?: boolean
}

const Card1: FC<Card18Props> = ({
    className = "h-full",
    titleClass = "text-lg ",
    ratio = "aspect-w-4 sm:aspect-w-3 aspect-h-3",
    article,
    hoverClass = "",
    showCategories = true,
}) => {
    const [isHover, setIsHover] = useState<boolean>(false)

    const {
        title,
        slug,
        categoryName,
        headlineTypeName,
        singlePhoto,
        singleVideo,
        singleAudio,
        reactionCount,
        commentCount,
    } = article

    const renderMeta = () => {
        return (
            <div className="inline-flex items-center text-xs text-neutral-300">
                <h2 className={`block font-semibold text-white ${titleClass}`}>
                    {title}
                </h2>
            </div>
        )
    }

    return (
        <div
            className={`nc-Card18 relative flex flex-col group rounded-xl overflow-hidden ${hoverClass} ${className}`}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            {!article.articleId ? (
                <PulseLoader className={className} ratio={ratio} />
            ) : (
                <>
                    <div
                        className={`absolute inset-x-0 top-0 p-3 flex items-center justify-between transition-all ${
                            isHover ? "opacity-100 z-20" : "opacity-0"
                        } duration-600`}
                    >
                        <PostCardLikeAndComment
                            className="relative"
                            likeCount={reactionCount}
                            commentCount={commentCount}
                            hiddenCommentOnMobile={false}
                        />
                        <PostCardSaveAction className="relative" />
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
                                sizes="(max-width: 600px) 480px, 800px"
                                alt="featured"
                                className="object-cover w-full h-full rounded-xl"
                                src={
                                    singlePhoto?.fileUrl ??
                                    singleVideo?.thumbnailUrl ??
                                    singleAudio?.thumbnailUrl ??
                                    placeholderImage
                                }
                                fill
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
                        className="absolute z-10 bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black opacity-80"
                    ></Link>
                    <div className="absolute z-10 bottom-0 inset-x-0 p-6 flex flex-col flex-grow">
                        <Link
                            href={getHref(headlineTypeName, slug)}
                            className="absolute inset-0"
                        ></Link>
                        {showCategories && (
                            <div className="mb-3">
                                <ArticleCategoryBadgeList
                                    categoryName={article.categoryName}
                                    categoryColorName={
                                        article.categoryColorName
                                    }
                                    categorySlug={article.categorySlug}
                                />
                            </div>
                        )}
                        {renderMeta()}
                    </div>
                </>
            )}
        </div>
    )
}

export default Card1

interface PulseLoaderProps {
    className?: string
    ratio?: string
}

const PulseLoader: React.FC<PulseLoaderProps> = ({ className, ratio }) => {
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
                            className="h-8 bg-gray-200 w-5/6"
                            style={{ borderRadius: "0.125rem" }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
