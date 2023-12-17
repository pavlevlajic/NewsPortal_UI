import { DEMO_AUTHORS } from "@/data/authors"
import { DEMO_POSTS, DEMO_POSTS_AUDIO } from "@/data/posts"
import { DEMO_CATEGORIES } from "@/data/taxonomies"
import Vector1 from "@/images/Vector1.png"
import rightImg from "@/images/hero-right.png"
import dynamic from "next/dynamic"
import Image from "next/image"

const BackgroundSection = dynamic(
    () => import("@/components/BackgroundSection/BackgroundSection")
)
const SectionBecomeAnAuthor = dynamic(
    () => import("@/components/SectionBecomeAnAuthor/SectionBecomeAnAuthor")
)
const SectionGridCategoryBox = dynamic(
    () => import("@/components/SectionGridCategoryBox/SectionGridCategoryBox")
)
const SectionHero = dynamic(
    () => import("@/components/SectionHero/SectionHero")
)
const SectionSliderNewAuthors = dynamic(
    () => import("@/components/SectionSliderNewAthors/SectionSliderNewAuthors")
)
const SectionSubscribe2 = dynamic(
    () => import("@/components/SectionSubscribe2/SectionSubscribe2")
)
const SectionAds = dynamic(() => import("@/components/Sections/SectionAds"))
const SectionLatestPosts = dynamic(
    () => import("@/components/Sections/SectionLatestPosts")
)
const SectionMagazine5 = dynamic(
    () => import("@/components/Sections/SectionMagazine5")
)
const SectionMagazine8 = dynamic(
    () => import("@/components/Sections/SectionMagazine8")
)
const SectionMagazine9 = dynamic(
    () => import("@/components/Sections/SectionMagazine9")
)
const SectionSliderPosts = dynamic(
    () => import("@/components/Sections/SectionSliderPosts")
)
const SectionVideos = dynamic(
    () => import("@/components/Sections/SectionVideos")
)

// DEMO DATA
const POSTS = DEMO_POSTS
const MAGAZINE1_POSTS = POSTS.filter((_, i) => i >= 0 && i < 8)
//

const PageHomeDemo3: React.FC = () => {
    return (
        <div className="nc-PageHomeDemo3 relative">
            <div className="container relative">
                <SectionHero
                    rightImg={rightImg}
                    className="pt-10 pb-16 md:py-16 lg:pb-28 lg:pt-20"
                    heading={
                        <span>
                            Far from face <br /> but not from {` `}
                            <span className="relative pr-3">
                                <Image
                                    className="w-full absolute top-1/2 -start-1 transform -translate-y-1/2"
                                    src={Vector1}
                                    alt=""
                                    loading="lazy"
                                />
                                <span className="relative">heart</span>
                            </span>
                        </span>
                    }
                    btnText="Getting started"
                    subHeading="Let stay at home and share with everyone the most beautiful stories in your hometown 🎈"
                />

                <SectionGridCategoryBox
                    headingCenter={false}
                    categoryCardType="card2"
                    className="pb-16 lg:pb-28"
                    categories={DEMO_CATEGORIES.filter((_, i) => i < 10)}
                />
                <div className="relative py-16">
                    <BackgroundSection />
                    <SectionMagazine5
                        heading="🧩 Editor Picks"
                        posts={MAGAZINE1_POSTS}
                    />
                </div>

                <SectionSliderPosts
                    className="py-16 lg:py-28"
                    postCardName="card10"
                    heading="Sea travel enthusiast"
                    subHeading="Over 218 articles about sea travel"
                    posts={POSTS.filter((_, i) => i < 8)}
                />

                <SectionAds />

                <SectionMagazine8
                    className="py-16 lg:py-28"
                    posts={DEMO_POSTS_AUDIO.filter((_, i) => i < 6)}
                />

                <div className="relative py-16">
                    <BackgroundSection />
                    <SectionMagazine9
                        posts={DEMO_POSTS_AUDIO.filter(
                            (_, i) => i >= 6 && i < 18
                        )}
                    />
                </div>

                <SectionVideos className="py-16 lg:py-28" />

                <div className="relative py-16">
                    <BackgroundSection />
                    <SectionSliderNewAuthors
                        heading="Newest authors"
                        subHeading="Say hello to future creator potentials"
                        authors={DEMO_AUTHORS.filter((_, i) => i < 10)}
                    />
                </div>

                <SectionBecomeAnAuthor className="py-16 lg:py-28" />

                <SectionLatestPosts
                    posts={DEMO_POSTS.filter((_, i) => i > 7 && i < 16)}
                    postCardName="card7"
                    gridClass="sm:grid-cols-2"
                    className="pb-16 lg:pb-28"
                />

                <SectionSubscribe2 className="pb-16 lg:pb-28" />
            </div>
        </div>
    )
}

export default PageHomeDemo3
