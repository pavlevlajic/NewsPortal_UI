import { DEMO_AUTHORS } from "@/data/authors"
import { DEMO_POSTS, DEMO_POSTS_AUDIO } from "@/data/posts"
import { DEMO_CATEGORIES } from "@/data/taxonomies"
import dynamic from "next/dynamic"

const BackgroundSection = dynamic(
    () => import("@/components/BackgroundSection/BackgroundSection")
)
const Card15Podcast = dynamic(
    () => import("@/components/Card15Podcast/Card15Podcast")
)
const Card16Podcast = dynamic(
    () => import("@/components/Card16Podcast/Card16Podcast")
)
const Heading = dynamic(() => import("@/components/Heading/Heading"))
const SectionSliderNewAuthors = dynamic(
    () => import("@/components/SectionSliderNewAthors/SectionSliderNewAuthors")
)
const SectionSliderNewCategories = dynamic(
    () =>
        import(
            "@/components/SectionSliderNewCategories/SectionSliderNewCategories"
        )
)
const SectionSubscribe2 = dynamic(
    () => import("@/components/SectionSubscribe2/SectionSubscribe2")
)
const SectionAds = dynamic(() => import("@/components/Sections/SectionAds"))
const SectionHero3 = dynamic(() => import("@/components/Sections/SectionHero3"))
const SectionLatestPosts = dynamic(
    () => import("@/components/Sections/SectionLatestPosts")
)
const SectionMagazine4 = dynamic(
    () => import("@/components/Sections/SectionMagazine4")
)
const SectionSliderPosts = dynamic(
    () => import("@/components/Sections/SectionSliderPosts")
)
const SectionVideos = dynamic(
    () => import("@/components/Sections/SectionVideos")
)

// DEMO DATA
const POSTS = DEMO_POSTS

// DEMO POST FOR MAGAZINE SECTION
const MAGAZINE1_POSTS = POSTS.filter((_, i) => i >= 0 && i < 8)
const MAGAZINE2_POSTS = DEMO_POSTS.filter((_, i) => i >= 0 && i < 7)
//

const PageHomeDemo2: React.FC = () => {
    return (
        <div className="nc-PageHomeDemo2 relative">
            <div className="container relative">
                <SectionHero3
                    className="pb-16 lg:pb-28"
                    posts={MAGAZINE1_POSTS}
                />

                <SectionSliderNewCategories
                    className="pb-16 lg:pb-28"
                    heading="Top trending topics"
                    categoryCardType="card5"
                    itemPerRow={4}
                    subHeading="Discover over 112 topics"
                    categories={DEMO_CATEGORIES.filter((_, i) => i < 10)}
                />
                <div className="relative py-16">
                    <BackgroundSection />
                    <SectionSliderPosts
                        postCardName="card7"
                        heading="Sea travel enthusiast"
                        subHeading="Over 218 articles about sea travel"
                        posts={POSTS.filter((_, i) => i < 8)}
                    />
                </div>

                <div className="py-16 lg:py-28">
                    <Heading>Latest audio articles</Heading>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        <Card16Podcast post={DEMO_POSTS_AUDIO[10]} />
                        <Card16Podcast post={DEMO_POSTS_AUDIO[11]} />
                        <Card16Podcast post={DEMO_POSTS_AUDIO[12]} />
                        <div className="md:col-span-2 lg:col-span-3">
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                                {DEMO_POSTS_AUDIO.filter((_, i) => i < 9).map(
                                    (p) => (
                                        <Card15Podcast key={p.id} post={p} />
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <SectionAds className="" />

                <SectionMagazine4
                    className="py-16 lg:py-28"
                    heading="Life styles 🎨 "
                    posts={MAGAZINE2_POSTS}
                />

                <div className="relative py-16">
                    <BackgroundSection />
                    <SectionSliderNewAuthors
                        heading="Top authors of month"
                        subHeading="Say hello to future creator potentials"
                        authors={DEMO_AUTHORS.filter((_, i) => i < 10)}
                    />
                </div>

                <SectionSubscribe2 className="py-16 lg:py-28" />

                <div className="relative py-16">
                    <BackgroundSection />
                    <SectionSliderPosts
                        postCardName="card9"
                        heading="Sea travel enthusiast"
                        subHeading="Over 218 articles about sea travel"
                        posts={POSTS.filter((_, i) => i < 8)}
                    />
                </div>

                <SectionVideos className="py-16 lg:py-28" />

                <SectionLatestPosts
                    className="pb-16 lg:pb-28"
                    postCardName="card14"
                    gridClass="sm:grid-cols-2"
                    posts={DEMO_POSTS.filter((_, i) => i >= 2 && i < 12)}
                />
            </div>
        </div>
    )
}

export default PageHomeDemo2
