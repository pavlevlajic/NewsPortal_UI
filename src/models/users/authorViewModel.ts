export interface AuthorViewModel {
    id: string
    firstName: string
    lastName: string
    userName: string
    profilePhotoUrl: string | null
    coverPhotoUrl: string | null
    articleCount: number
    popularity: number
}
