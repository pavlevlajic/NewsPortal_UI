export interface CategoryViewModel {
    id: string
    name: string
    colorName: string
    slug: string
    frontPhotoUrl: string | null
    coverPhotoUrl: string | null
    articleCount: number
    popularity: number
}
