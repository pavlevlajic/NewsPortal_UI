import Avatar from "@/components/Avatar/Avatar"
import placeholderUser from "@/images/placeholderUser.jpg"
import { AuthorViewModel } from "@/models/users/authorViewModel"
import { ArrowRightIcon } from "@heroicons/react/24/outline"
import { Route } from "next"
import Link from "next/link"
import { FC } from "react"

export interface CardAuthorBoxProps {
    className?: string
    author: AuthorViewModel
}

const CardAuthorBox: FC<CardAuthorBoxProps> = ({ className = "", author }) => {
    const { firstName, lastName, userName, profilePhotoUrl, popularity } =
        author

    return !author.id ? (
        <PulseLoader />
    ) : (
        <Link
            href={("/author/" + userName) as Route}
            className={`nc-CardAuthorBox flex flex-col items-center justify-center text-center px-3 py-5 sm:px-6 sm:py-7 rounded-3xl bg-white dark:bg-neutral-900 ${className}`}
        >
            <Avatar
                sizeClass="w-20 h-20 text-2xl"
                radius="rounded-full"
                imgUrl={profilePhotoUrl ?? placeholderUser}
                userName={`${firstName} ${lastName}`}
            />
            <div className="mt-3">
                <h2 className={`text-sm sm:text-base font-medium`}>
                    <span className="line-clamp-1">
                        {firstName} {lastName}
                    </span>
                </h2>
                <span
                    className={`block mt-1 text-sm text-neutral-500 dark:text-neutral-400`}
                >
                    @{userName}
                </span>
            </div>
            <div className="py-2 px-4 mt-4 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center leading-none text-xs font-medium">
                {popularity}{" "}
                <ArrowRightIcon className="w-5 h-5 text-yellow-600 ms-3" />
            </div>
        </Link>
    )
}

export default CardAuthorBox

const PulseLoader: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <div
            className={`nc-CardAuthorBox flex flex-col items-center justify-center text-center px-3 py-5 sm:px-6 sm:py-7 rounded-3xl bg-gray-200 animate-pulse ${className}`}
        >
            <div className="w-20 h-20 rounded-full bg-gray-300"></div>{" "}
            {/* Placeholder for avatar */}
            <div className="mt-3 flex flex-col items-center ">
                <div className="h-6 bg-gray-400 rounded w-40 mb-2"></div>{" "}
                {/* Placeholder for author's name */}
                <div className="h-4 bg-gray-400 rounded w-32"></div>{" "}
                {/* Placeholder for username */}
            </div>
            <div className="mt-4 bg-gray-300 rounded-full flex items-center justify-center leading-none text-xs font-medium w-24 h-10"></div>{" "}
            {/* Placeholder for popularity */}
        </div>
    )
}
