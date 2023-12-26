"use client"

import { ArticleSidebar } from "@/app/(singles)/ArticleSidebar"
import ArticleSingleContent from "@/app/(singles)/ArticleSingleContent"
import ArticleSingleRelatedArticles from "@/app/(singles)/ArticleSingleRelatedArticles"
import SingleArticleHeader from "@/app/(singles)/SingleArticleHeader"
import NcImage from "@/components/NcImage/NcImage"
import ListingImageGallery from "@/components/listing-image-gallery/ListingImageGallery"
import { HeadlineType } from "@/constants/headlineType"
import placeholderImage from "@/images/placeholder-large.png"
import { SinglePageViewModel } from "@/models/singlePage/singlePageViewModel"
import { Route } from "next"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

export default function SingleContent({ data }: { data: SinglePageViewModel }) {
    const router = useRouter()
    const thisPathname = usePathname()
    const searchParams = useSearchParams()
    const modal = searchParams?.get("modal")

    const handleCloseModalImageGallery = () => {
        let params = new URLSearchParams(document.location.search)
        params.delete("modal")
        router.push(`${thisPathname}/?${params.toString()}` as Route)
    }
    const handleOpenModalImageGallery = () => {
        router.push(`${thisPathname}/?modal=PHOTO_TOUR_SCROLLABLE` as Route)
    }

    return (
        <>
            <div className={`nc-PageSingle pt-8 lg:pt-16`}>
                <header className="container rounded-xl">
                    <div className="max-w-screen-md mx-auto">
                        <SingleArticleHeader article={data.article} />
                    </div>
                </header>

                {/* FEATURED IMAGE */}
                {data.article.headlineTypeName === HeadlineType.SinglePhoto ? (
                    <NcImage
                        alt="single"
                        containerClassName="container my-10 sm:my-12"
                        className="w-full rounded-xl"
                        src={
                            data.article.singlePhoto?.fileUrl ||
                            "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg"
                        }
                        width={1260}
                        height={750}
                        sizes="(max-width: 1024px) 100vw, 1280px"
                    />
                ) : data.article.headlineTypeName ===
                  HeadlineType.MultiplePhoto ? (
                    <>
                        <div className="relative grid grid-cols-3 sm:grid-cols-4 gap-2 my-10">
                            <div
                                className="col-span-2 row-span-2 relative rounded-xl overflow-hidden cursor-pointer z-0"
                                onClick={handleOpenModalImageGallery}
                            >
                                <NcImage
                                    alt="single"
                                    containerClassName="absolute inset-0"
                                    className="object-cover w-full h-full rounded-xl"
                                    fill
                                    src={
                                        data.article.multiplePhoto?.items[0]
                                            .fileUrl ?? placeholderImage
                                    }
                                />
                                <div className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity"></div>
                            </div>
                            {data.article.multiplePhoto?.items
                                .filter((_, i) => i >= 1 && i < 5)
                                .map((x, i) => (
                                    <div
                                        key={i}
                                        className={`relative rounded-xl overflow-hidden z-0 ${
                                            i >= 2 ? "hidden sm:block" : ""
                                        }`}
                                    >
                                        <NcImage
                                            alt="single"
                                            fill
                                            containerClassName="aspect-w-6 aspect-h-5"
                                            className="object-cover w-full h-full rounded-xl"
                                            src={x.fileUrl}
                                        />

                                        {/* OVERLAY */}
                                        <div
                                            className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
                                            onClick={
                                                handleOpenModalImageGallery
                                            }
                                        />
                                    </div>
                                ))}

                            <div
                                className="absolute hidden md:flex md:items-center md:justify-center right-3 bottom-3 px-4 py-2 rounded-full bg-neutral-100 text-neutral-500 cursor-pointer hover:bg-neutral-200 z-10"
                                onClick={handleOpenModalImageGallery}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                                    />
                                </svg>
                                <span className="ms-2 text-neutral-800 text-sm font-medium">
                                    Show all photos
                                </span>
                            </div>
                        </div>

                        <ListingImageGallery
                            isShowModal={modal === "PHOTO_TOUR_SCROLLABLE"}
                            onClose={handleCloseModalImageGallery}
                            images={data.article.multiplePhoto!.items.map(
                                (x, i) => {
                                    return {
                                        id: i,
                                        url: x.fileUrl,
                                    }
                                }
                            )}
                        />
                    </>
                ) : (
                    <></>
                )}

                <div className={`relative`}>
                    <div className="container flex flex-col my-10 lg:flex-row ">
                        <div className="w-full lg:w-3/5 xl:w-2/3 xl:pe-20">
                            <ArticleSingleContent data={data.article} />
                        </div>
                        <div className="w-full mt-12 lg:mt-0 lg:w-2/5 lg:ps-10 xl:ps-0 xl:w-1/3">
                            <ArticleSidebar
                                tags={data.popularTags}
                                categories={data.popularCategories}
                                authors={data.popularAuthors}
                                articles={data.popularArticles}
                            />
                        </div>
                    </div>

                    {/* RELATED POSTS */}
                    <ArticleSingleRelatedArticles
                        relatedArticles={data.relatedArticles}
                        moreArticlesFromAuthor={data.moreArticlesFromAuthor}
                    />
                </div>
            </div>
        </>
    )
}
