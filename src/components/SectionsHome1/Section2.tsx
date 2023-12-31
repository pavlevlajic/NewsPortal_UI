import {
    HomePageContent10,
    HomePageContent2,
    HomePageContent8,
} from "@/models/homePage/homePageViewModel"
import { FC } from "react"
import Card3 from "../Cards/Card3"
import ArticleHeaderFilter from "../Sections/ArticleHeaderFilter"

interface Section2Props {
    content: HomePageContent2 | HomePageContent8 | HomePageContent10
    className?: string
    hasBackground?: boolean
}

const Section2: FC<Section2Props> = ({
    content,
    className = "",
    hasBackground = false,
}) => {
    const renderContent = () => {
        return (
            <div className={`nc-Section2 relative ${className}`}>
                {content.categoryWithArticles.categoryName ? (
                    <ArticleHeaderFilter
                        heading={content.categoryWithArticles.categoryName}
                        desc={`Discover the most outstanding articles on ${content.categoryWithArticles.categoryName} topic. `}
                    />
                ) : (
                    <PulseLoader />
                )}

                {!content.categoryWithArticles.articles.length && (
                    <span>Nothing we found!</span>
                )}

                <div className="relative">
                    <div className="grid grid-cols-1 gap-6 md:gap-8">
                        <div
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                        xl:grid-cols-4 gap-6 md:gap-8 mt-3"
                        >
                            {content.categoryWithArticles.articles.map(
                                (x, i) => (
                                    <Card3
                                        // ratio="aspect-w-5 aspect-h-3"
                                        key={i}
                                        article={x}
                                        hiddenAuthor={true}
                                    />
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container relative mt-20">
            {hasBackground ? (
                <div className="relative py-16">
                    <div
                        className="absolute inset-y-0 w-screen xl:max-w-[1340px] 2xl:max-w-screen-2xl left-1/2 
            transform -translate-x-1/2 rounded-none md:rounded-md z-0 bg-neutral-200 bg-opacity-40 dark:bg-black dark:bg-opacity-20"
                    ></div>

                    {renderContent()}
                </div>
            ) : (
                <>
                    <>{renderContent()}</>
                </>
            )}
        </div>
    )
}

export default Section2

const PulseLoader: React.FC = () => {
    return (
        <div className="flex flex-row justify-between mb-8 relative animate-pulse">
            <div>
                <div className="h-10 bg-gray-300 rounded w-60 mb-4"></div>{" "}
                <div className="flex space-x-2">
                    <div className="h-6 bg-gray-300 rounded w-40"></div>
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
