import { HomePageContent3 } from "@/models/homePage/homePageViewModel"
import { FC } from "react"
import Card4 from "../Cards/Card4"
import Card5 from "../Cards/Card5"
import ArticleHeaderFilter from "../Sections/ArticleHeaderFilter"

interface Section3Props {
    content: HomePageContent3
    className?: string
    gapClassName?: string
    heading?: string
    desc?: string
    hasBackground?: boolean
}

const Section3: FC<Section3Props> = ({
    content,
    className = "",
    gapClassName = "gap-6 md:gap-8",
    heading = "Latest articles",
    desc,
    hasBackground = false,
}) => {
    const renderContent = () => {
        return (
            <div className={`nc-Section3 relative ${className}`}>
                {content.articles?.[0].articleId ? (
                    <ArticleHeaderFilter heading={heading} desc={desc} />
                ) : (
                    <PulseLoader />
                )}
                <div
                    className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 ${gapClassName}`}
                >
                    {content.articles[0] && (
                        <Card4
                            ratio="aspect-w-4 aspect-h-3"
                            article={content.articles[0]}
                        />
                    )}
                    {content.articles[1] && (
                        <Card4
                            ratio="aspect-w-4 aspect-h-3"
                            article={content.articles[1]}
                        />
                    )}
                </div>
                <div
                    className={`grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 ${gapClassName} mt-8`}
                >
                    {content.articles
                        .filter((_, i) => i > 1)
                        .map((x, i) => (
                            <Card5 key={i} article={x} />
                        ))}
                </div>
            </div>
        )
    }

    return (
        <div className="container relative mt-20">
            {hasBackground ? (
                <div className="relative py-16">
                    {/* bg-fuchsia-100 dark:bg-fuchsia-800 dark:bg-opacity-70 */}
                    <div
                        className="absolute inset-y-0 w-screen xl:max-w-[1340px] 2xl:max-w-screen-2xl left-1/2 
            transform -translate-x-1/2 rounded-none md:rounded-md z-0 bg-neutral-200 bg-opacity-40 dark:bg-black dark:bg-opacity-20"
                    ></div>

                    {renderContent()}
                </div>
            ) : (
                <>{renderContent()}</>
            )}
        </div>
    )
}

export default Section3

const PulseLoader: React.FC = () => {
    return (
        <div className="flex flex-row justify-between mb-8 relative animate-pulse">
            <div>
                <div className="h-10 bg-gray-300 rounded w-80 mb-4"></div>{" "}
                <div className="flex space-x-2">
                    <div className="h-6 bg-gray-300 rounded w-60"></div>
                </div>
            </div>
            {/* Placeholder for heading */}
            <div className="flex justify-between items-center">
                <div className="h-14 bg-gray-300 rounded w-40"></div>{" "}
                {/* Placeholder for button */}
            </div>
        </div>
    )
}
