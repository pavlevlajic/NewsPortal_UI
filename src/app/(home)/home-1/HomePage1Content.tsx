"use client"

import Section11 from "@/components/SectionsHome1/Section11"
import Section12 from "@/components/SectionsHome1/Section12"
import Section13 from "@/components/SectionsHome1/Section13"
import {
    initHomePageContent1,
    initHomePageContent10,
    initHomePageContent11,
    initHomePageContent12,
    initHomePageContent13,
    initHomePageContent2,
    initHomePageContent3,
    initHomePageContent4,
    initHomePageContent5,
    initHomePageContent6,
    initHomePageContent7,
    initHomePageContent8,
    initHomePageContent9,
} from "@/constants/contants"
import becomAuthorImg from "@/images/BecomeAnAuthorImg.png"
import dynamic from "next/dynamic"
import useGetHomePageContent from "../../../hooks/homePage/useGetHomePageContent"

const Section1 = dynamic(() => import("@/components/SectionsHome1/Section1"))
const Section2 = dynamic(() => import("@/components/SectionsHome1/Section2"))
const Section3 = dynamic(() => import("@/components/SectionsHome1/Section3"))
const Section4 = dynamic(() => import("@/components/SectionsHome1/Section4"))
const Section5 = dynamic(() => import("@/components/SectionsHome1/Section5"))
const Section14 = dynamic(() => import("@/components/SectionsHome1/Section14"))

export default function HomePage1Content() {
    const { homePageContent } = useGetHomePageContent()

    return (
        <div className="nc-PageHomeDemo6 relative mt-4">
            <div className="relative overflow-hidden">
                {/* Content 1: 8 latest articles */}
                <Section1
                    content={homePageContent?.content1 ?? initHomePageContent1}
                />

                {/* Content 2: 4 latest by most popular category */}
                <Section2
                    content={homePageContent?.content2 ?? initHomePageContent2}
                    className="[ nc-section-rounded-md ]"
                    hasBackground
                />

                {/* Content 3: 8 latest (except from content 1 and content 2) - Highlighted */}
                <Section3
                    content={homePageContent?.content3 ?? initHomePageContent3}
                    className="[ nc-section-rounded-md ]"
                    hasBackground
                    heading="Explore our latest articles"
                />

                {/* Content 4: 4 latest articles from second most popular category */}
                <Section4
                    content={homePageContent?.content4 ?? initHomePageContent4}
                    className="[ nc-section-rounded-md ]"
                />

                {/* Content 5: 6 latest articles from third most popular category */}
                <Section5
                    content={homePageContent?.content5 ?? initHomePageContent5}
                    className="[ nc-section-rounded-md ]"
                />

                {/* Content 6: 4 latest articles from fourth most popular category */}
                <Section4
                    content={homePageContent?.content6 ?? initHomePageContent6}
                    className="[ nc-section-rounded-md ]"
                    hasBackground
                />

                {/* Content 7: 6 latest articles from fifth most popular category */}
                <Section5
                    content={homePageContent?.content7 ?? initHomePageContent7}
                    className="[ nc-section-rounded-md ]"
                />

                {/* Content 8: 4 latest articles from sixth most popular category */}
                <Section2
                    content={homePageContent?.content8 ?? initHomePageContent8}
                    className="[ nc-section-rounded-md ]"
                    hasBackground
                />

                {/* Content 9: 6 latest articles from seventh most popular category */}
                <Section5
                    content={homePageContent?.content9 ?? initHomePageContent9}
                    className="[ nc-section-rounded-md ]"
                />

                {/* Content 10: 4 latest articles from eighth most popular category */}
                <Section2
                    content={
                        homePageContent?.content10 ?? initHomePageContent10
                    }
                    className="[ nc-section-rounded-md ]"
                />

                {/* Content 11: 16 latest articles except from other articles before */}
                <Section11
                    content={
                        homePageContent?.content11 ?? initHomePageContent11
                    }
                    className="[ nc-section-rounded-md ]"
                    hasBackground
                    heading="Explore other latest articles"
                    desc="Explore 1129 other articles"
                />

                {/* Content 12: Categories */}
                {/* Todo: Pulse Loader */}
                <Section12
                    className="py-16 lg:py-28"
                    heading="Topics by trending"
                    subHeading="Discover 156 topics"
                    content={
                        homePageContent?.content12 ?? initHomePageContent12
                    }
                    categoryCardType="card4"
                />

                {/* Content 13: Authors */}
                {/* Todo: Pulse Loader*/}
                <Section13
                    content={
                        homePageContent?.content13 ?? initHomePageContent13
                    }
                    className="py-6 lg:py-10"
                    hasBackground
                />

                {/* Content 14: 4 latest by most popular category */}
                <Section14 className="py-16" rightImg={becomAuthorImg} />
            </div>
        </div>
    )
}
