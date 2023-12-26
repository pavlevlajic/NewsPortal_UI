import Avatar from "@/components/Avatar/Avatar"
import placeholderFront from "@/images/placeholderUser.jpg"
import { AuthorViewModel } from "@/models/users/authorViewModel"
import { Route } from "next"
import Link from "next/link"
import { FC } from "react"

interface ArticleCardAuthorProps {
    className?: string
    author: AuthorViewModel
}

const ArticleCardAuthor: FC<ArticleCardAuthorProps> = ({
    className = "",
    author,
}) => {
    const {
        firstName,
        lastName,
        userName,
        articleCount,
        coverPhotoUrl,
        id,
        profilePhotoUrl,
        popularity,
    } = author

    return (
        <Link
            href={("/author/" + userName) as Route}
            className={`nc-ArticleCardAuthor flex items-center ${className}`}
        >
            <Avatar
                sizeClass="h-10 w-10 text-base"
                containerClassName="flex-shrink-0 me-4"
                radius="rounded-full"
                imgUrl={profilePhotoUrl ?? placeholderFront}
                userName={`${firstName} ${lastName}`}
            />
            <div>
                <h2
                    className={`text-sm sm:text-base text-neutral-900 dark:text-neutral-100 font-medium sm:font-semibold`}
                >
                    {firstName} {lastName}
                </h2>
                <span
                    className={`block mt-[2px] text-xs text-neutral-500 dark:text-neutral-400`}
                >
                    {`${articleCount} Articles`} | {`${popularity} Reactions`}
                </span>
            </div>
        </Link>
    )
}

export default ArticleCardAuthor
