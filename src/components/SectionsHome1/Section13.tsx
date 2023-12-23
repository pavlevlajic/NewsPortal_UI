import Heading from "@/components/Heading/Heading"
import { HomePageContent13 } from "@/models/homePage/homePageViewModel"
import { FC } from "react"
import CardAuthorBox from "../Cards/CardAuthorBox"
import MySlider from "../MySlider"

export interface Section13Props {
    className?: string
    content: HomePageContent13
    hasBackground?: boolean
}

const Section13: FC<Section13Props> = ({
    className = "",
    content,
    hasBackground = false,
}) => {
    const renderContent = () => {
        return (
            <div className={`nc-Section13 relative ${className}`}>
                {content.authors?.[0].id ? (
                    <Heading
                        desc="Say hello to future creator potentials"
                        isCenter
                    >
                        Our authors
                    </Heading>
                ) : (
                    <PulseLoader />
                )}
                <MySlider
                    itemPerRow={5}
                    data={content.authors}
                    renderItem={(x, i) => <CardAuthorBox key={i} author={x} />}
                />
            </div>
        )
    }

    return (
        <div className="container relative">
            {hasBackground ? (
                <div className="relative py-12">
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

export default Section13

const PulseLoader = () => {
    return (
        <div className="mb-10 md:mb-12">
            <div className="flex flex-col items-center text-center w-full max-w-2xl mx-auto">
                <div className="h-8 bg-gray-300 rounded w-2/4 mb-2 animate-pulse"></div>{" "}
                {/* Placeholder for heading */}
                <div className="h-4 bg-gray-300 rounded w-1/3 animate-pulse mt-2"></div>{" "}
                {/* Placeholder for description */}
            </div>
        </div>
    )
}
