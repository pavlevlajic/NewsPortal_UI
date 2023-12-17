import PostCardLikeAndComment from "@/components/PostCardLikeAndComment/PostCardLikeAndComment"
import PostCardSaveAction from "@/components/PostCardSaveAction/PostCardSaveAction"
import { HeadlineType } from "@/constants/headlineType"
import placeholderImage from "@/images/placeholder-image.webp"
import { ArticlePreviewViewModel } from "@/models/article/articlePreviewViewModel"
import { Route } from "next"
import Image from "next/image"
import Link from "next/link"
import { FC, useState } from "react"
import ArticleCategoryBadgeList from "../CategoryBadgeList/ArticleCategoryBadgeList"
import ArticleFeaturedMedia from "../PostFeaturedMedia/ArticleFeaturedMedia"
import ArticleFeaturedIcon from "../PostTypeFeaturedIcon/ArticleFeaturedIcon"

interface Card2Props {
    className?: string
    ratio?: string
    titleClass?: string
    article: ArticlePreviewViewModel
    hoverClass?: string
    showCategories?: boolean
    pulseLoaderNoRation?: boolean
}

const Card2: FC<Card2Props> = ({
    className = "h-full",
    titleClass = "text-xl sm:text-2xl xl:text-3xl",
    ratio = "aspect-w-4 sm:aspect-w-3 aspect-h-3",
    article,
    hoverClass = "",
    showCategories = true,
    pulseLoaderNoRation = false,
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
        numberOfReactions,
        numberOfBookmarks,
        numberOfComments,
    } = article

    const getHref = (): Route => {
        switch (headlineTypeName) {
            case HeadlineType.SinglePhoto:
                return ("/single-4/" + slug) as Route

            case HeadlineType.SingleVideo:
                return ("/single-video/" + slug) as Route

            case HeadlineType.SingleAudio:
                return ("/single-audio/" + slug) as Route

            case HeadlineType.MultiplePhoto:
                return ("/single-gallery/" + slug) as Route

            default:
                return "/not-found" as Route
        }
    }

    const renderMeta = () => {
        return (
            <div className="inline-flex items-center text-xs text-neutral-300">
                <h2 className={`block  font-semibold text-white ${titleClass}`}>
                    {title}
                </h2>
            </div>
        )
    }

    return (
        <div
            className={`nc-Card2 relative flex flex-col group rounded-xl overflow-hidden ${hoverClass} ${className}`}
            data-nc-id="Card2"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            {!article.articleId ? (
                <PulseLoader
                    className={className}
                    ratio={ratio}
                />
            ) : (
                <>
                    <div
                        className={`absolute inset-x-0 top-0 p-3 flex items-center justify-between transition-all ${
                            isHover ? "opacity-100 z-20" : "opacity-0"
                        } duration-600`}
                    >
                        <PostCardLikeAndComment
                            className="relative"
                            likeCount={numberOfReactions}
                            commentCount={numberOfComments}
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
                        <Link href={getHref()}>
                            <Image
                                sizes="(max-width: 600px) 480px, 800px"
                                className="object-cover w-full h-full rounded-xl"
                                src={
                                    singlePhoto?.fileUrl ??
                                    singleVideo?.thumbnailUrl ??
                                    singleAudio?.thumbnailUrl ??
                                    placeholderImage
                                }
                                alt="post"
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
                        href={getHref()}
                        className="absolute z-10 bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black opacity-80"
                    ></Link>
                    <div className="absolute z-10 bottom-0 inset-x-0 p-5 sm:p-8 flex flex-col flex-grow">
                        <Link
                            href={getHref()}
                            className="absolute inset-0"
                        ></Link>
                        {showCategories && (
                            <div className="mb-3">
                                <ArticleCategoryBadgeList
                                    categories={[categoryName]}
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

export default Card2

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
                            className="h-8 bg-gray-200 w-5/6"
                            style={{ borderRadius: "0.125rem" }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
