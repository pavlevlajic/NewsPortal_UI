"use client"

import {
    content1NumberOfArticles,
    initArticlePreview,
} from "@/constants/contants"
import { DEMO_POSTS_NEWS } from "@/data/posts"
import { ArticlePreviewViewModel } from "@/models/article/articlePreviewViewModel"
import dynamic from "next/dynamic"
import useGetHomePageContent from "../../../hooks/homePage/useGetHomePageContent"

const Section1 = dynamic(() => import("@/components/SectionsHome1/Section1"))
const Section2 = dynamic(() => import("@/components/SectionsHome1/Section2"))

const SectionAds = dynamic(() => import("@/components/Sections/SectionAds"))
const SectionLatestPosts = dynamic(
    () => import("@/components/Sections/SectionLatestPosts")
)
const SectionMagazine11 = dynamic(
    () => import("@/components/Sections/SectionMagazine11")
)
const SectionMagazine7 = dynamic(
    () => import("@/components/Sections/SectionMagazine7")
)
const SectionMagazine2 = dynamic(
    () => import("@/components/Sections/SectionMagazine2")
)
const SectionMagazine9 = dynamic(
    () => import("@/components/Sections/SectionMagazine9")
)

//
const MAGAZINE1_POSTS = DEMO_POSTS_NEWS.filter((_, i) => i >= 8 && i < 16)
const MAGAZINE2_POSTS = DEMO_POSTS_NEWS.filter((_, i) => i >= 0 && i < 4)
const MAGAZINE3_POSTS = DEMO_POSTS_NEWS.filter((_, i) => i >= 0 && i < 7)
//

const INIT_CONTENT_1: ArticlePreviewViewModel[] = new Array(
    content1NumberOfArticles
).fill(initArticlePreview)

const INIT_CONTENT_2: ArticlePreviewViewModel[] = new Array(
    content1NumberOfArticles
).fill(initArticlePreview)

export default function HomePage1Content() {
    const { homePageContent } = useGetHomePageContent()

    return (
        <div className="nc-PageHomeDemo6 relative [ nc-section-rounded-md ] mt-4">
            <div className="relative overflow-hidden">
                <div className="container relative">
                    <Section1
                        articles={
                            homePageContent?.content1.articles ?? INIT_CONTENT_1
                        }
                    />

                    {/* <SectionMagazine9
                        gapClassName="gap-6"
                        className="pt-16 lg:pt-24"
                        posts={DEMO_POSTS_NEWS.filter(
                            (_, i) => i >= 6 && i < 18
                        )}
                    /> */}

                    {/* <SectionAds className="pt-16 lg:pt-24" /> */}

                    {/* <SectionMagazine2
                        className="pt-16 lg:pt-24"
                        heading="Latest Articles"
                        posts={MAGAZINE2_POSTS}
                    /> */}

                    {/* === SECTION 11 === */}
                    {/* <SectionMagazine11 className="py-16 lg:py-24" /> */}
                </div>

                {/* === SECTION 11 === */}
                <div className="dark bg-neutral-900 dark:bg-black dark:bg-opacity-20 text-neutral-100">
                    <div className="relative container">
                        {/* <SectionLatestPosts
                            heading="Latest Articles"
                            className="py-16 lg:py-24"
                            posts={DEMO_POSTS_NEWS.filter(
                                (_, i) => i > 7 && i < 18
                            )}
                            postCardName="card4"
                            gridClass="sm:grid-cols-2"
                        />*/}
                        <Section2
                            articles={
                                homePageContent?.content2.articles ??
                                INIT_CONTENT_2
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
