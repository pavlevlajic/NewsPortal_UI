import { ArticlePreviewViewModel } from "../article/articlePreviewViewModel"
import { CategoryViewModel } from "../article/categoryViewModel"
import { AuthorViewModel } from "../users/authorViewModel"

export interface HomePageViewModel {
    content1: HomePageContent1
    content2: HomePageContent2
    content3: HomePageContent3
    content4: HomePageContent4
    content5: HomePageContent5
    content6: HomePageContent6
    content7: HomePageContent7
    content8: HomePageContent8
    content9: HomePageContent9
    content10: HomePageContent10
    content11: HomePageContent11
    content12: HomePageContent12
    content13: HomePageContent13
}

export interface HomePageContent1 {
    articles: ArticlePreviewViewModel[]
}

export interface CategoryWithArticles {
    categoryName: string
    articles: ArticlePreviewViewModel[]
}

export interface HomePageContent2 {
    categoryWithArticles: CategoryWithArticles
}

export interface HomePageContent3 {
    articles: ArticlePreviewViewModel[]
}

export interface HomePageContent4 {
    categoryWithArticles: CategoryWithArticles
}

export interface HomePageContent5 {
    categoryWithArticles: CategoryWithArticles
}

export interface HomePageContent6 {
    categoryWithArticles: CategoryWithArticles
}

export interface HomePageContent7 {
    categoryWithArticles: CategoryWithArticles
}

export interface HomePageContent8 {
    categoryWithArticles: CategoryWithArticles
}

export interface HomePageContent9 {
    categoryWithArticles: CategoryWithArticles
}

export interface HomePageContent10 {
    categoryWithArticles: CategoryWithArticles
}

export interface HomePageContent11 {
    articles: ArticlePreviewViewModel[]
}

export interface HomePageContent12 {
    categories: CategoryViewModel[]
}

export interface HomePageContent13 {
    authors: AuthorViewModel[]
}
