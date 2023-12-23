import { HomePageContent1 } from "@/models/homePage/homePageViewModel"
import { FC } from "react"
import Card1 from "../Cards/Card1"
import Card2 from "../Cards/Card2"
import Card3 from "../Cards/Card3"

interface Section1Props {
    content: HomePageContent1
    heading?: string
    className?: string
}

const Section1: FC<Section1Props> = ({ content, className = "" }) => {
    return (
        <div className="container relative [ nc-section-rounded-md ]">
            <div className={`nc-Section1 ${className}`}>
                <>
                    {!content.articles?.length && (
                        <span>Nothing we found!</span>
                    )}
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-5 gap-5">
                            {content.articles
                                .filter((_, i) => i < 3 && i >= 1)
                                .map((x, i) => (
                                    <Card1
                                        className="sm:row-span-3 col-span-1"
                                        key={i}
                                        article={x}
                                    />
                                ))}

                            {content.articles?.[3] && (
                                <Card2
                                    ratio="aspect-w-4 aspect-h-3 sm:aspect-h-1 sm:aspect-w-16 "
                                    className="sm:col-span-2 sm:row-span-2"
                                    titleClass="text-xl sm:text-2xl xl:text-2xl"
                                    article={content.articles[3]}
                                />
                            )}
                        </div>

                        {content.articles?.[0] && (
                            <Card2
                                className=""
                                article={content.articles[0]}
                            />
                        )}
                    </div>
                </>

                <div className="relative">
                    <div className="grid grid-cols-1 gap-6 md:gap-8">
                        <div
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                        xl:grid-cols-4 gap-6 md:gap-8 mt-3"
                        >
                            {content.articles
                                ?.filter(
                                    (x, i) =>
                                        i > 3 && i < content.articles.length
                                )
                                .map((x, i) => (
                                    <Card3
                                        key={i}
                                        article={x}
                                        hiddenAuthor={true}
                                    />
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section1
