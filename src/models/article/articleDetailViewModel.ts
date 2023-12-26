import { MultiplePhotoItemArticlePreview } from "./articlePreviewViewModel"

export interface ArticleDetailViewModel {
    articleId: string
    minutesToRead: number
    title: string
    briefContent: string
    htmlContent: string
    slug: string
    tags: string[]
    categoryId: string
    categoryName: string
    categorySlug: string
    categoryColorName: string
    categoryFrontPhotoUrl: string | null
    categoryCoverPhotoUrl: string | null
    headlineTypeId: string
    headlineTypeName: string
    singlePhoto: SinglePhotoArticleDetail | null
    singleVideo: SingleVideoArticleDetail | null
    singleAudio: SingleAudioArticleDetail | null
    multiplePhoto: MultiplePhotoArticleDetail | null
    userId: string
    authorFirstName: string
    authorLastName: string
    authorUserName: string
    authorProfilePhotoUrl: string | null
    createdDateLocal: string
    formattedDate: string
    shortFormattedDate: string
    bookmarkCount: number
    commentCount: number
    reactionCount: number
}

export interface SinglePhotoArticleDetail {
    fileUrl: string
}

export interface SingleVideoArticleDetail {
    thumbnailUrl: string | null
    fileUrl: string
}

export interface SingleAudioArticleDetail {
    thumbnailUrl: string | null
    fileUrl: string
}

export interface MultiplePhotoArticleDetail {
    items: MultiplePhotoItemArticlePreview[]
}

export interface MultiplePhotoItemArticleDetail {
    fileUrl: string
    order: number
}
