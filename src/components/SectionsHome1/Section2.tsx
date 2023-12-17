import { ArticlePreviewViewModel } from "@/models/article/articlePreviewViewModel"
import { FC } from "react"
import Card3 from "../Cards/Card3"
import HeaderFilter from "../Sections/HeaderFilter"

interface Section1Props {
    articles: ArticlePreviewViewModel[]
    heading?: string
    className?: string
}

const Section1: FC<Section1Props> = ({ articles, className = "" }) => {
    return (
        <>
            <div className={`nc-SectionMagazine2 ${className}`}>
                <HeaderFilter heading={"Latest articles (temporary heading)"} />

                {!articles.length && <span>Nothing we found!</span>}

                <div className={`relative`}>
                    <div className={`grid grid-cols-1 gap-6 md:gap-8`}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-3">
                            {articles.map((x, i) => (
                                <Card3
                                    ratio="aspect-w-5 aspect-h-3"
                                    key={i}
                                    article={x}
                                    hiddenAuthor={true}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section1
