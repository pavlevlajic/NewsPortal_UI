import { ArticleDetailViewModel } from "../article/articleDetailViewModel"
import { ArticlePreviewViewModel } from "../article/articlePreviewViewModel"
import { CategoryViewModel } from "../article/categoryViewModel"
import { TagViewModel } from "../article/tagViewModel"
import { AuthorViewModel } from "../users/authorViewModel"

export interface SinglePageViewModel {
    article: ArticleDetailViewModel
    popularTags: TagViewModel[]
    popularCategories: CategoryViewModel[]
    popularAuthors: AuthorViewModel[]
    popularArticles: ArticlePreviewViewModel[]
    relatedArticles: ArticlePreviewViewModel[]
    moreArticlesFromAuthor: ArticlePreviewViewModel[]
}
