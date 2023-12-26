import Avatar from "@/components/Avatar/Avatar"
import placeholderUser from "@/images/placeholderUser.jpg"
import { UserViewModel } from "@/models/users/userViewModel"
import { Route } from "next"
import Link from "next/link"
import { FC } from "react"

interface ArticleSingleAuthorProps {
    author: UserViewModel
}

const ArticleSingleAuthor: FC<ArticleSingleAuthorProps> = ({ author }) => {
    const getAuthorHref = (): Route => {
        return ("/author/" + author.userName) as Route
    }

    return (
        <div className="nc-ArticleSingleAuthor flex">
            <Link href={getAuthorHref()}>
                <Avatar
                    imgUrl={author.profilePhotoUrl ?? placeholderUser}
                    userName={author.userName}
                    sizeClass="h-12 w-12 text-lg sm:text-xl sm:h-24 sm:w-24"
                />
            </Link>
            <div className="flex flex-col ml-3 max-w-lg sm:ml-5">
                <span className="text-xs text-neutral-400 uppercase tracking-wider">
                    WRITTEN BY
                </span>
                <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-200">
                    <Link href={getAuthorHref()}>
                        {author.firstName} {author.lastName}
                    </Link>
                </h2>
                <span className="block mt-1 text-sm text-neutral-500 sm:text-base dark:text-neutral-300">
                    {author.userName}
                    <Link
                        className="text-primary-6000 font-medium ml-1"
                        href={getAuthorHref()}
                    >
                        Read more
                    </Link>
                </span>
            </div>
        </div>
    )
}

export default ArticleSingleAuthor
