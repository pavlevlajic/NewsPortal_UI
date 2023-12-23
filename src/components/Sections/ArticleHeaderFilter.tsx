"use client"

import { ArrowRightIcon } from "@heroicons/react/24/outline"
import { FC } from "react"
import Button from "../Button/Button"
import ArticleSectionHeading from "../Heading/ArticleSectionHeading"

interface ArticleHeaderFilterProps {
    heading: string
    desc?: string
}

const ArticleHeaderFilter: FC<ArticleHeaderFilterProps> = ({
    heading = "🎈 Latest Articles",
    desc,
}) => {
    return (
        <div className="flex justify-between mb-10">
            <div className="">
                <ArticleSectionHeading desc={desc}>
                    {heading}
                </ArticleSectionHeading>
            </div>

            <div className="flex items-center flex-row">
                <Button pattern="white">
                    <span>View all</span>
                    <ArrowRightIcon className="ms-3 w-6 h-6 rtl:rotate-180" />
                </Button>
            </div>
        </div>
    )
}

export default ArticleHeaderFilter
