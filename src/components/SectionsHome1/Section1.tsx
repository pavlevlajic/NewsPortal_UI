import { ArticlePreviewViewModel } from "@/models/article/articlePreviewViewModel"
import { FC } from "react"
import Card1 from "../Cards/Card1"
import Card2 from "../Cards/Card2"
import Card3 from "../Cards/Card3"

interface Section1Props {
    articles: ArticlePreviewViewModel[]
    heading?: string
    className?: string
}

const Section1: FC<Section1Props> = ({ articles, className = "" }) => {
    return (
        <>
            <div className={`nc-SectionMagazine10 ${className}`}>
                {!articles?.length && <span>Nothing we found!</span>}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-5 gap-5">
                        {articles
                            .filter((_, i) => i < 3 && i >= 1)
                            .map((x, i) => (
                                <Card1
                                    className="sm:row-span-3 col-span-1"
                                    key={i}
                                    article={x}
                                />
                            ))}

                        {articles?.[3] && (
                            <Card2
                                ratio="aspect-w-4 aspect-h-3 sm:aspect-h-1 sm:aspect-w-16 "
                                className="sm:col-span-2 sm:row-span-2"
                                titleClass="text-xl sm:text-2xl xl:text-2xl"
                                article={articles[3]}
                            />
                        )}
                    </div>

                    {articles?.[0] && (
                        <Card2
                            className=""
                            article={articles[0]}
                            pulseLoaderNoRation
                        />
                    )}
                </div>
            </div>

            <div className={`nc-SectionMagazine7 relative`}>
                <div className={`grid grid-cols-1 gap-6 md:gap-8`}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-3">
                        {articles
                            ?.filter((x, i) => i > 3 && i < articles.length)
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
        </>
    )
}

export default Section1
