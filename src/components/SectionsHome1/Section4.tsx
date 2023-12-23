import {
    HomePageContent4,
    HomePageContent6,
} from "@/models/homePage/homePageViewModel"
import { FC } from "react"
import Card4 from "../Cards/Card4"
import Card5 from "../Cards/Card5"
import ArticleHeaderFilter from "../Sections/ArticleHeaderFilter"

interface Section4Props {
    content: HomePageContent4 | HomePageContent6
    className?: string
    gapClassName?: string
    hasBackground?: boolean
}

const Section4: FC<Section4Props> = ({
    content,
    className = "",
    gapClassName = "gap-6 md:gap-8",
    hasBackground = false,
}) => {
    const renderContent = () => {
        return (
            <div className={`nc-Section4 ${className}`}>
                {content.categoryWithArticles.categoryName ? (
                    <ArticleHeaderFilter
                        heading={content.categoryWithArticles.categoryName}
                    />
                ) : (
                    <PulseLoader />
                )}
                <div
                    className={`grid grid-cols-1 md:grid-cols-4 ${gapClassName}`}
                >
                    {/* Main content on the left - spans 2 columns in medium screens */}
                    <div className="md:col-span-2">
                        {content.categoryWithArticles.articles[0] && (
                            <Card4
                                ratio="aspect-w-4 aspect-h-3"
                                article={
                                    content.categoryWithArticles.articles[0]
                                }
                            />
                        )}
                    </div>

                    {/* Additional content on the right - spans 1 column in medium screens */}
                    <div className="md:col-span-2 space-y-6">
                        {content.categoryWithArticles.articles
                            .filter((_, i) => i >= 1) // Adjust the index as needed
                            .map((article, i) => (
                                <Card5 key={i} article={article} className="" />
                            ))}
                    </div>
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

export default Section4

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
