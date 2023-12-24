import { ArticleDetailViewModel } from "../article/articleDetailViewModel"
import { ArticlePreviewViewModel } from "../article/articlePreviewViewModel"
import { CategoryViewModel } from "../article/categoryViewModel"
import { TagViewModel } from "../article/tagViewModel"
import { UserViewModel } from "../users/userViewModel"

export interface SinglePageViewModel {
    article: ArticleDetailViewModel
    popularTags: TagViewModel[]
    popularCategories: CategoryViewModel[]
    popularAuthors: UserViewModel[]
    popularArticles: ArticlePreviewViewModel[]
    relatedArticles: ArticlePreviewViewModel[]
    moreArticlesFromAuthor: ArticlePreviewViewModel[]
}
