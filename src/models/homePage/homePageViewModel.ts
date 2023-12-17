import { ArticlePreviewViewModel } from "../article/articlePreviewViewModel"

export interface HomePageViewModel {
    content1: HomePageContent1ViewModel
    content2: HomePageContent2ViewModel
    content3: HomePageContent3ViewModel
    content4: HomePageContent4ViewModel
    content5: HomePageContent5ViewModel
    content7: HomePageContent7ViewModel
}

export interface HomePageContent1ViewModel {
    articles: ArticlePreviewViewModel[]
}

export interface HomePageContent2ViewModel {
    articles: ArticlePreviewViewModel[]
}

export interface HomePageContent3ViewModel {
    articles: ArticlePreviewViewModel[]
    categories: HomePageContent3Category[]
}

export interface HomePageContent3Category {
    id: string
    name: string
}

export interface HomePageContent4ViewModel {
    categories: HomePageContent4Category[]
}

export interface HomePageContent4Category {
    id: string
    name: string
    numberOfArticles: number
}

export interface HomePageContent5ViewModel {
    authors: HomePageContent5Author[]
}

export interface HomePageContent5Author {
    id: string
    firstName: string
    lastName: string
    userName: string
    profilePhotoUrl: string | null
    coverPhotoUrl: string | null
    numberOfArticles: number
    numberOfInteractions: number
}

export interface HomePageContent7ViewModel {
    articles: ArticlePreviewViewModel[]
    numberOfOtherArticles: number
}
