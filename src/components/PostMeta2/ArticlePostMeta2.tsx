import Avatar from "@/components/Avatar/Avatar"
import placeholderUser from "@/images/placeholderUser.jpg"
import { ArticleDetailViewModel } from "@/models/article/articleDetailViewModel"
import { Route } from "next"
import Link from "next/link"
import { FC } from "react"

interface ArticlePostMeta2Props {
    className?: string
    meta: Pick<
        ArticleDetailViewModel,
        | "formattedDate"
        | "authorFirstName"
        | "authorLastName"
        | "authorUserName"
        | "authorProfilePhotoUrl"
        | "categoryName"
        | "categorySlug"
        | "minutesToRead"
    >
    size?: "large" | "normal"
    avatarRounded?: string
}

const ArticlePostMeta2: FC<ArticlePostMeta2Props> = ({
    className = "leading-none",
    meta,
    size = "normal",
    avatarRounded,
}) => {
    const {
        formattedDate,
        authorFirstName,
        authorLastName,
        authorUserName,
        authorProfilePhotoUrl,
        categoryName,
        categorySlug,
        minutesToRead,
    } = meta

    return (
        <div
            className={`nc-ArticlePostMeta2 flex items-center flex-wrap text-neutral-700 text-left dark:text-neutral-200 ${
                size === "normal" ? "text-xs" : "text-sm"
            } ${className}`}
        >
            <Link
                href={("/author/" + authorUserName) as Route}
                className="flex items-center space-x-2 rtl:space-x-reverse"
            >
                <Avatar
                    radius={avatarRounded}
                    sizeClass={
                        size === "normal"
                            ? "h-6 w-6 text-sm"
                            : "h-10 w-10 sm:h-11 sm:w-11 text-xl"
                    }
                    imgUrl={authorProfilePhotoUrl ?? placeholderUser}
                    userName={`${authorFirstName} ${authorLastName}`}
                />
            </Link>
            <div className="ms-3">
                <div className="flex items-center">
                    <Link
                        href={("/author/" + authorUserName) as Route}
                        className="block font-semibold"
                    >
                        {authorFirstName} {authorLastName}
                    </Link>
                </div>
                <div className="text-xs mt-[6px]">
                    <span className="text-neutral-700 dark:text-neutral-300">
                        {formattedDate}
                    </span>
                    <span className="mx-2 font-semibold">·</span>
                    <span className="text-neutral-700 dark:text-neutral-300">
                        {minutesToRead} min read
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ArticlePostMeta2
