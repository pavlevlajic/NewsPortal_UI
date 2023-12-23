"use client"

import CardCategory1 from "@/components/CardCategory1/CardCategory1"
import CardCategory2 from "@/components/CardCategory2/CardCategory2"
import CardCategory3 from "@/components/CardCategory3/CardCategory3"
import CardCategory4 from "@/components/CardCategory4/CardCategory4"
import CardCategory5 from "@/components/CardCategory5/CardCategory5"
import Heading from "@/components/Heading/Heading"
import { TaxonomyType } from "@/data/types"
import placeholderImage from "@/images/placeholder-small.png"
import { CategoryViewModel } from "@/models/article/categoryViewModel"
import { HomePageContent12 } from "@/models/homePage/homePageViewModel"
import { Route } from "next"
import { FC } from "react"
import MySlider from "../MySlider"

export interface Section12Props {
    className?: string
    heading: string
    subHeading: string
    content: HomePageContent12
    categoryCardType?: "card1" | "card2" | "card3" | "card4" | "card5"
    itemPerRow?: 4 | 5
}

const Section12: FC<Section12Props> = ({
    heading,
    subHeading,
    className = "",
    content,
    itemPerRow = 5,
    categoryCardType = "card3",
}) => {
    const mapCategoryToTaxonomy = (
        category: CategoryViewModel
    ): TaxonomyType => {
        return {
            href: ("/archive/" + category.slug) as Route,
            id: category.id,
            name: category.name,
            taxonomy: "category",
            color: category.colorName,
            thumbnail: category.frontPhotoUrl ?? placeholderImage,
            count: category.articleCount,
        }
    }

    const renderCard = (category: CategoryViewModel, index: number) => {
        const topIndex = index < 3 ? `#${index + 1}` : undefined

        switch (categoryCardType) {
            case "card1":
                return (
                    <CardCategory1
                        key={index}
                        taxonomy={mapCategoryToTaxonomy(category)}
                    />
                )
            case "card2":
                return (
                    <CardCategory2
                        key={index}
                        index={topIndex}
                        taxonomy={mapCategoryToTaxonomy(category)}
                    />
                )
            case "card3":
                return (
                    <CardCategory3
                        key={index}
                        taxonomy={mapCategoryToTaxonomy(category)}
                    />
                )
            case "card4":
                return !content.categories?.[0].id ? (
                    <PulseLoaderCard4 />
                ) : (
                    <CardCategory4
                        key={index}
                        index={topIndex}
                        taxonomy={mapCategoryToTaxonomy(category)}
                    />
                )
            case "card5":
                return (
                    <CardCategory5
                        key={index}
                        taxonomy={mapCategoryToTaxonomy(category)}
                    />
                )
            default:
                return null
        }
    }

    return (
        <div className="container relative">
            <div className={`nc-Section12 ${className}`}>
                {content.categories?.[0].id ? (
                    <Heading desc={subHeading}>{heading}</Heading>
                ) : (
                    <PulseLoaderHeading />
                )}
                <MySlider
                    data={content.categories}
                    renderItem={(x, i) => renderCard(x, i)}
                    itemPerRow={itemPerRow}
                />
            </div>
        </div>
    )
}

export default Section12

const PulseLoaderHeading: React.FC = () => {
    return (
        <div className="flex flex-row mb-8 relative animate-pulse">
            <div>
                <div className="h-10 bg-gray-300 rounded w-80 mb-4"></div>{" "}
                <div className="flex space-x-2">
                    <div className="h-8 bg-gray-300 rounded w-40"></div>
                </div>
            </div>
        </div>
    )
}

const PulseLoaderCard4: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <div
            className={`nc-CardCategory4 flex flex-col ${className} animate-pulse`}
        >
            <div className="flex-shrink-0 relative w-full aspect-w-7 aspect-h-5 h-0 rounded-3xl overflow-hidden bg-gray-300"></div>

            {/* Placeholder for image */}
            <div className="flex items-center mt-5">
                <div className="w-14 h-10 bg-gray-400 rounded-full"></div>{" "}
                {/* Placeholder for color badge */}
                <div className="w-full ms-4">
                    <div className="h-4 bg-gray-400 rounded w-3/4 mb-2"></div>{" "}
                    {/* Placeholder for title */}
                    <div className="h-3 bg-gray-400 rounded w-1/2"></div>{" "}
                    {/* Placeholder for count */}
                </div>
            </div>
        </div>
    )
}
