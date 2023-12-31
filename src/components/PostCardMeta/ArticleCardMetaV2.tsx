import Avatar from "@/components/Avatar/Avatar"
import { ArticlePreviewViewModel } from "@/models/article/articlePreviewViewModel"
import { Route } from "next"
import Link from "next/link"
import { FC } from "react"

export interface ArticleCardMetaV2Props {
    meta: Pick<
        ArticlePreviewViewModel,
        | "formattedDate"
        | "authorFirstName"
        | "authorLastName"
        | "authorUserName"
        | "authorProfilePhotoUrl"
        | "title"
        | "slug"
        | "headlineTypeName"
    >
    hiddenAvatar?: boolean
    className?: string
    titleClassName?: string
    avatarSize?: string
}

const ArticleCardMetaV2: FC<ArticleCardMetaV2Props> = ({
    meta,
    hiddenAvatar = false,
    className = "leading-none text-xs",
    titleClassName = "text-base",
    avatarSize = "h-9 w-9 text-base",
}) => {
    const {
        formattedDate,
        authorFirstName,
        authorLastName,
        authorUserName,
        authorProfilePhotoUrl,
        slug,
        headlineTypeName,
    } = meta

    return (
        <div
            className={`nc-PostCardMetaV2 inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 ${className}`}
        >
            <div className="relative flex items-center space-x-2 rtl:space-x-reverse">
                {!hiddenAvatar && (
                    <Avatar
                        radius="rounded-full"
                        sizeClass={avatarSize}
                        imgUrl={authorProfilePhotoUrl ?? undefined}
                        userName={`${authorFirstName} ${authorLastName}`}
                    />
                )}
                <div>
                    {/* <h2 className={`block font-semibold ${titleClassName}`}>
                        <Link href={getHref()} className="line-clamp-1">
                            {title}
                        </Link>
                    </h2> */}

                    <Link
                        href={("/author/" + authorUserName) as Route}
                        className="flex mt-1.5"
                    >
                        <span className="block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium">
                            {authorFirstName} {authorLastName}
                        </span>
                        <span className="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">
                            ·
                        </span>
                        <span className="text-neutral-500 dark:text-neutral-400 font-normal">
                            {formattedDate}
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ArticleCardMetaV2
