"use client"

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
import { HomePageViewModel } from "@/models/homePage/homePageViewModel"
import dynamic from "next/dynamic"

const Section1 = dynamic(() => import("@/components/SectionsHome1/Section1"))
const Section2 = dynamic(() => import("@/components/SectionsHome1/Section2"))
const Section3 = dynamic(() => import("@/components/SectionsHome1/Section3"))
const Section4 = dynamic(() => import("@/components/SectionsHome1/Section4"))
const Section5 = dynamic(() => import("@/components/SectionsHome1/Section5"))
const Section11 = dynamic(() => import("@/components/SectionsHome1/Section11"))
const Section12 = dynamic(() => import("@/components/SectionsHome1/Section12"))
const Section13 = dynamic(() => import("@/components/SectionsHome1/Section13"))
const Section14 = dynamic(() => import("@/components/SectionsHome1/Section14"))

interface Props {
    content: HomePageViewModel | null
}

export default function HomePage1Content({ content }: Props) {
    return (
        <div className="nc-PageHomeDemo6 relative mt-4">
            <div className="relative overflow-hidden">
                {/* Content 1: 8 latest articles */}
                <Section1 content={content?.content1 ?? initHomePageContent1} />

                {/* Content 2: 4 latest by most popular category */}
                <Section2
                    content={content?.content2 ?? initHomePageContent2}
                    className="[ nc-section-rounded-md ]"
                    hasBackground
                />

                {/* Content 3: 8 latest - Highlighted (has background) */}
                <Section3
                    content={content?.content3 ?? initHomePageContent3}
                    className="[ nc-section-rounded-md ]"
                    heading="Explore our latest articles"
                    hasBackground
                />

                {/* Content 4: 4 latest articles from second most popular category */}
                <Section4
                    content={content?.content4 ?? initHomePageContent4}
                    className="[ nc-section-rounded-md ]"
                />

                {/* Content 5: 6 latest articles from third most popular category */}
                <Section5
                    content={content?.content5 ?? initHomePageContent5}
                    className="[ nc-section-rounded-md ]"
                />

                {/* Content 6: 4 latest articles from fourth most popular category - Highlighted (has background)*/}
                <Section4
                    content={content?.content6 ?? initHomePageContent6}
                    className="[ nc-section-rounded-md ]"
                    hasBackground
                />

                {/* Content 7: 6 latest articles from fifth most popular category */}
                <Section5
                    content={content?.content7 ?? initHomePageContent7}
                    className="[ nc-section-rounded-md ]"
                />

                {/* Content 8: 4 latest articles from sixth most popular category - Highlighted (has background) */}
                <Section2
                    content={content?.content8 ?? initHomePageContent8}
                    className="[ nc-section-rounded-md ]"
                    hasBackground
                />

                {/* Content 9: 6 latest articles from seventh most popular category */}
                <Section5
                    content={content?.content9 ?? initHomePageContent9}
                    className="[ nc-section-rounded-md ]"
                />

                {/* Content 10: 4 latest articles from eighth most popular category */}
                <Section2
                    content={content?.content10 ?? initHomePageContent10}
                    className="[ nc-section-rounded-md ]"
                />

                {/* Content 11: 16 latest articles - Highlighted (has background) */}
                <Section11
                    content={content?.content11 ?? initHomePageContent11}
                    className="[ nc-section-rounded-md ]"
                    hasBackground
                    heading="Explore our other latest articles"
                    desc="Explore 1129 other articles"
                />

                {/* Content 12: Categories */}
                <Section12
                    className="py-16 lg:py-28"
                    heading="Topics ordered by trending"
                    subHeading={`Discover ${content?.content12.categories.length} topics`}
                    content={content?.content12 ?? initHomePageContent12}
                    categoryCardType="card4"
                />

                {/* Content 13: Authors */}
                <Section13
                    content={content?.content13 ?? initHomePageContent13}
                    className="py-6 lg:py-10"
                    hasBackground
                />

                {/* Content 14: 4 latest by most popular category */}
                <Section14 className="py-16" rightImg={becomAuthorImg} />
            </div>
        </div>
    )
}
