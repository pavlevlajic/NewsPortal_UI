export interface ArticlePreviewViewModel {
    articleId: string
    title: string
    briefContent: string
    slug: string
    categoryId: string
    categoryName: string
    headlineTypeId: string
    headlineTypeName: string
    singlePhoto: SinglePhotoArticlePreview | null
    singleVideo: SingleVideoArticlePreview | null
    singleAudio: SingleAudioArticlePreview | null
    multiplePhoto: MultiplePhotoArticlePreview | null
    userId: string
    authorFirstName: string
    authorLastName: string
    authorUserName: string
    authorProfilePhotoUrl: string | null
    createdDateLocal: string
    numberOfBookmarks: number
    numberOfComments: number
    numberOfReactions: number
}

export interface SinglePhotoArticlePreview {
    fileUrl: string
}

export interface SingleVideoArticlePreview {
    thumbnailUrl: string | null
    fileUrl: string
}

export interface SingleAudioArticlePreview {
    thumbnailUrl: string | null
    fileUrl: string
}

export interface MultiplePhotoArticlePreview {
    items: MultiplePhotoItemArticlePreview[]
}

export interface MultiplePhotoItemArticlePreview {
    fileUrl: string
    order: number
}
