"use client"

import { defaultPostData, defaultTaxonomy } from "@/constants/contants"
import { HeadlineType } from "@/constants/headlineType"
import placeholderImage from "@/images/placeholder-image.webp"
import { ArticlePreviewViewModel } from "@/models/article/articlePreviewViewModel"
import { Route } from "next"
import Image from "next/image"
import Link from "next/link"
import { FC } from "react"
import ButtonPlayMusicPlayer from "../ButtonPlayMusicPlayer"
import ArticleFeaturedIcon from "../PostTypeFeaturedIcon/ArticleFeaturedIcon"
import GallerySlider from "./GallerySlider"
import MediaVideo from "./MediaVideo"

interface ArticleFeaturedMediaProps {
    className?: string
    article: ArticlePreviewViewModel
    isHover?: boolean
}

const ArticleFeaturedMedia: FC<ArticleFeaturedMediaProps> = ({
    className = "w-full h-full",
    article,
    isHover = false,
}) => {
    const {
        headlineTypeName,
        slug,
        singlePhoto,
        multiplePhoto,
        singleVideo,
        singleAudio,
        title,
        categoryName,
    } = article

    const isPostMedia = () =>
        headlineTypeName === HeadlineType.SingleVideo ||
        headlineTypeName === HeadlineType.SingleAudio

    const renderGallerySlider = () => {
        if (headlineTypeName !== HeadlineType.MultiplePhoto) {
            return null
        }

        return (
            <GallerySlider
                href={("/single-gallery/" + slug) as Route}
                galleryImgs={multiplePhoto?.items.map((x) => x.fileUrl) ?? []}
                className="absolute inset-0 z-10"
                galleryClass="absolute inset-0"
                ratioClass="absolute inset-0"
            />
        )
    }

    const renderContent = () => {
        // GALLERY
        if (headlineTypeName === HeadlineType.MultiplePhoto) {
            return renderGallerySlider()
        }

        // VIDEO
        if (
            headlineTypeName === HeadlineType.SingleVideo &&
            !!singleVideo?.fileUrl &&
            isHover
        ) {
            return <MediaVideo isHover videoUrl={singleVideo.fileUrl} />
        }

        // AUDIO
        if (
            headlineTypeName === HeadlineType.SingleAudio &&
            !!singleAudio?.fileUrl
        ) {
            return (
                <ButtonPlayMusicPlayer
                    className="absolute inset-0 bg-neutral-900/30 flex items-center justify-center"
                    post={{
                        ...defaultPostData,
                        featuredImage: singleAudio?.thumbnailUrl ?? "",
                        title: title,
                        postType: "audio", // SingleAudio
                        audioUrl: singleAudio?.fileUrl,
                        categories: [
                            { ...defaultTaxonomy, name: categoryName },
                        ],
                    }}
                />
            )
        }

        // ICON
        return isPostMedia() ? (
            <span className="absolute inset-0 flex items-center justify-center ">
                <ArticleFeaturedIcon
                    className="hover:scale-105 transform cursor-pointer transition-transform"
                    headlineTypeName={headlineTypeName}
                />
            </span>
        ) : null
    }

    return (
        <div className={`nc-PostFeaturedMedia relative ${className}`}>
            {headlineTypeName !== HeadlineType.MultiplePhoto && (
                <Image
                    alt="featured"
                    fill
                    className="object-cover"
                    src={
                        singlePhoto?.fileUrl ??
                        singleVideo?.thumbnailUrl ??
                        singleAudio?.thumbnailUrl ??
                        placeholderImage
                    }
                    sizes="(max-width: 600px) 480px, 800px"
                />
            )}
            {renderContent()}
            {headlineTypeName !== HeadlineType.MultiplePhoto && (
                <Link
                    href={("/single-4/" + slug) as Route}
                    className={`block absolute inset-0 ${
                        !headlineTypeName ||
                        headlineTypeName === HeadlineType.SinglePhoto
                            ? "bg-black/20 transition-opacity opacity-0 group-hover:opacity-100"
                            : ""
                    }`}
                />
            )}
        </div>
    )
}

export default ArticleFeaturedMedia
