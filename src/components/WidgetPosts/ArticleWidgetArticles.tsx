import Card3Small from "@/components/Card3Small/Card3Small"
import WidgetHeading1 from "@/components/WidgetHeading1/WidgetHeading1"
import { defaultAuthor, defaultPostData, getHref } from "@/constants/contants"
import placeholderImage from "@/images/placeholder-small.png"
import placeholderFront from "@/images/placeholderUser.jpg"
import { ArticlePreviewViewModel } from "@/models/article/articlePreviewViewModel"
import { Route } from "next"
import { FC } from "react"

interface ArticleWidgetArticlesProps {
    className?: string
    articles: ArticlePreviewViewModel[]
}

const ArticleWidgetArticles: FC<ArticleWidgetArticlesProps> = ({
    className = "bg-neutral-100 dark:bg-neutral-800",
    articles,
}) => {
    return (
        <div
            className={`nc-ArticleWidgetArticles rounded-3xl overflow-hidden ${className}`}
        >
            <WidgetHeading1
                title="🎯 Popular Articles"
                viewAll={{ label: "View all", href: "/#" }}
            />
            <div className="flex flex-col divide-y divide-neutral-200 dark:divide-neutral-700">
                {articles.map((x, i) => (
                    <Card3Small
                        className="p-4 xl:px-5 xl:py-6 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                        key={x.articleId}
                        post={{
                            ...defaultPostData,
                            title: x.title,
                            href: getHref(x.headlineTypeName, x.slug),
                            featuredImage:
                                x.singlePhoto?.fileUrl ??
                                x.singleVideo?.thumbnailUrl ??
                                x.singleAudio?.thumbnailUrl ??
                                x.multiplePhoto?.items[0].fileUrl ??
                                placeholderImage,
                            author: {
                                ...defaultAuthor,
                                firstName: x.authorFirstName,
                                lastName: x.authorLastName,
                                displayName: `${x.authorFirstName} ${x.authorLastName}`,
                                avatar:
                                    x.authorProfilePhotoUrl ?? placeholderFront,
                                href: ("/author/" + x.authorUserName) as Route,
                                jobName: x.authorUserName,
                            },
                            date: x.shortFormattedDate,
                        }}
                    />
                ))}
            </div>
        </div>
    )
}

export default ArticleWidgetArticles
