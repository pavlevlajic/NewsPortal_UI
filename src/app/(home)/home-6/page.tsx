import { DEMO_POSTS_NEWS } from "@/data/posts"
import dynamic from "next/dynamic"

const SectionAds = dynamic(() => import("@/components/Sections/SectionAds"))
const SectionLatestPosts = dynamic(
    () => import("@/components/Sections/SectionLatestPosts")
)
const SectionMagazine10 = dynamic(
    () => import("@/components/Sections/SectionMagazine10"),
    {
        loading: () => <p>Loading...</p>,
    }
)
const SectionMagazine11 = dynamic(
    () => import("@/components/Sections/SectionMagazine11")
)
const SectionMagazine2 = dynamic(
    () => import("@/components/Sections/SectionMagazine2")
)
const SectionMagazine9 = dynamic(
    () => import("@/components/Sections/SectionMagazine9")
)

//
const MAGAZINE1_POSTS = DEMO_POSTS_NEWS.filter((_, i) => i >= 8 && i < 16)
const MAGAZINE2_POSTS = DEMO_POSTS_NEWS.filter((_, i) => i >= 0 && i < 7)
//

const PageHomeDemo6: React.FC = () => {
    return (
        <div className="nc-PageHomeDemo6 relative [ nc-section-rounded-md ]">
            <div className="relative overflow-hidden">
                <div className="container relative">
                    <SectionMagazine10 posts={MAGAZINE1_POSTS} />

                    <SectionMagazine9
                        gapClassName="gap-6"
                        className="pt-16 lg:pt-24"
                        posts={DEMO_POSTS_NEWS.filter(
                            (_, i) => i >= 6 && i < 18
                        )}
                    />

                    <SectionAds className="pt-16 lg:pt-24" />

                    <SectionMagazine2
                        className="pt-16 lg:pt-24"
                        heading="Latest Articles"
                        posts={MAGAZINE2_POSTS}
                    />

                    {/* === SECTION 11 === */}
                    <SectionMagazine11 className="py-16 lg:py-24" />
                </div>

                {/* === SECTION 11 === */}
                <div className="dark bg-neutral-900 dark:bg-black dark:bg-opacity-20 text-neutral-100">
                    <div className="relative container">
                        <SectionLatestPosts
                            heading="Latest Articles"
                            className="py-16 lg:py-24"
                            posts={DEMO_POSTS_NEWS.filter(
                                (_, i) => i > 7 && i < 18
                            )}
                            postCardName="card4"
                            gridClass="sm:grid-cols-2"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageHomeDemo6
