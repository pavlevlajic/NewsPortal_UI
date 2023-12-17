import PostCardCommentBtn from "@/components/PostCardCommentBtn/PostCardCommentBtn"
import PostCardLikeAction from "@/components/PostCardLikeAction/PostCardLikeAction"
import { FC } from "react"

export interface PostCardLikeAndCommentProps {
    className?: string
    itemClass?: string
    hiddenCommentOnMobile?: boolean
    useOnSinglePage?: boolean
    likeCount?: number
    commentCount?: number
}

const PostCardLikeAndComment: FC<PostCardLikeAndCommentProps> = ({
    className = "",
    itemClass = "px-3 h-8 text-xs",
    hiddenCommentOnMobile = true,
    useOnSinglePage = false,
    likeCount,
    commentCount,
}) => {
    return (
        <div
            className={`nc-PostCardLikeAndComment flex items-center space-x-2 rtl:space-x-reverse ${className}`}
        >
            <PostCardLikeAction likeCount={likeCount} className={itemClass} />
            <PostCardCommentBtn
                commentCount={commentCount}
                className={`${
                    hiddenCommentOnMobile ? "hidden sm:flex" : "flex"
                }  ${itemClass}`}
                isATagOnSingle={useOnSinglePage}
            />
        </div>
    )
}

export default PostCardLikeAndComment
