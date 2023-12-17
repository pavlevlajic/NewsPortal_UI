import ButtonPlayMusicPlayer from "@/components/ButtonPlayMusicPlayer"
import { PostDataType } from "@/data/types"
import { FC } from "react"

export interface MediaAudioProps {
    post: PostDataType
}

const MediaAudio: FC<MediaAudioProps> = ({ post }) => {
    return (
        <>
            <ButtonPlayMusicPlayer
                className="absolute inset-0 bg-neutral-900/30 flex items-center justify-center"
                post={post}
            />
        </>
    )
}

export default MediaAudio
