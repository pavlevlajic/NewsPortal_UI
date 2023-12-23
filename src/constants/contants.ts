import { PostAuthorType, PostDataType, TaxonomyType } from "@/data/types"
import { ArticlePreviewViewModel } from "@/models/article/articlePreviewViewModel"
import { CategoryViewModel } from "@/models/article/categoryViewModel"
import {
    HomePageContent1,
    HomePageContent10,
    HomePageContent11,
    HomePageContent12,
    HomePageContent13,
    HomePageContent2,
    HomePageContent3,
    HomePageContent4,
    HomePageContent5,
    HomePageContent6,
    HomePageContent7,
    HomePageContent8,
    HomePageContent9,
} from "@/models/homePage/homePageViewModel"
import { AuthorViewModel } from "@/models/users/authorViewModel"
import { Route } from "next"
import { HeadlineType } from "./headlineType"

const avatarColors = [
    "#ffdd00",
    "#fbb034",
    "#ff4c4c",
    "#c1d82f",
    "#f48924",
    "#7ac143",
    "#30c39e",
    "#06BCAE",
    "#0695BC",
    "#037ef3",
    "#146eb4",
    "#8e43e7",
    "#ea1d5d",
    "#fc636b",
    "#ff6319",
    "#e01f3d",
    "#a0ac48",
    "#00d1b2",
    "#472f92",
    "#388ed1",
    "#a6192e",
    "#4a8594",
    "#7B9FAB",
    "#1393BD",
    "#5E13BD",
    "#E208A7",
]

// Assuming you have definitions for `CustomLink`, `TaxonomyType`, `PostAuthorType`, `TwMainColor` as in your provided code

// Initialize default author
const defaultAuthor: PostAuthorType = {
    id: "",
    firstName: "",
    lastName: "",
    displayName: "",
    avatar: "",
    count: 0,
    desc: "",
    jobName: "",
    href: "" as Route, // Assuming Route can be an empty string
}

// Initialize default taxonomy
const defaultTaxonomy: TaxonomyType = {
    id: "",
    name: "",
    href: "" as Route, // Assuming Route can be an empty string
    taxonomy: "category", // Default to 'category' or 'tag', as required
    color: "gray", // Default color
}

// Initialize default PostDataType
const defaultPostData: PostDataType = {
    id: "",
    author: defaultAuthor,
    date: "",
    href: "" as Route, // Assuming Route can be an empty string
    categories: [defaultTaxonomy],
    title: "",
    featuredImage: "",
    like: {
        count: 0,
        isLiked: false,
    },
    bookmark: {
        count: 0,
        isBookmarked: false,
    },
    commentCount: 0,
    viewdCount: 0,
    readingTime: 0,
    postType: "standard", // Default to one of the post types
}

const initArticlePreview: ArticlePreviewViewModel = {
    articleId: "",
    title: "",
    briefContent: "",
    slug: "",
    categoryId: "",
    categoryName: "",
    categoryColorName: "",
    categorySlug: "",
    categoryFrontPhotoUrl: null,
    categoryCoverPhotoUrl: null,
    headlineTypeId: "",
    headlineTypeName: "",
    singlePhoto: null,
    singleVideo: null,
    singleAudio: null,
    multiplePhoto: null,
    userId: "",
    authorFirstName: "",
    authorLastName: "",
    authorUserName: "",
    authorProfilePhotoUrl: null,
    createdDateLocal: "",
    formattedDate: "",
    bookmarkCount: 0,
    commentCount: 0,
    reactionCount: 0,
}

const initAuthor: AuthorViewModel = {
    id: "",
    firstName: "",
    lastName: "",
    userName: "",
    profilePhotoUrl: null,
    coverPhotoUrl: null,
    articleCount: 0,
    popularity: 0,
}

const initCategory: CategoryViewModel = {
    id: "",
    name: "",
    colorName: "",
    slug: "",
    frontPhotoUrl: null,
    coverPhotoUrl: null,
    articleCount: 0,
    popularity: 0,
}

const content1NumberOfArticles = 8
const content2NumberOfArticles = 4
const content3NumberOfArticles = 8
const content4NumberOfArticles = 4
const content5NumberOfArticles = 6
const content6NumberOfArticles = 4
const content7NumberOfArticles = 6
const content8NumberOfArticles = 4
const content9NumberOfArticles = 6
const content10NumberOfArticles = 4
const content11NumberOfArticles = 8
const content12NumberOfCategories = 5

const initHomePageContent1: HomePageContent1 = {
    articles: new Array(content1NumberOfArticles).fill(initArticlePreview),
}

const initHomePageContent2: HomePageContent2 = {
    categoryWithArticles: {
        categoryName: "",
        articles: new Array(content2NumberOfArticles).fill(initArticlePreview),
    },
}

const initHomePageContent3: HomePageContent3 = {
    articles: new Array(content3NumberOfArticles).fill(initArticlePreview),
}

const initHomePageContent4: HomePageContent4 = {
    categoryWithArticles: {
        categoryName: "",
        articles: new Array(content4NumberOfArticles).fill(initArticlePreview),
    },
}

const initHomePageContent5: HomePageContent5 = {
    categoryWithArticles: {
        categoryName: "",
        articles: new Array(content5NumberOfArticles).fill(initArticlePreview),
    },
}

const initHomePageContent6: HomePageContent6 = {
    categoryWithArticles: {
        categoryName: "",
        articles: new Array(content6NumberOfArticles).fill(initArticlePreview),
    },
}

const initHomePageContent7: HomePageContent7 = {
    categoryWithArticles: {
        categoryName: "",
        articles: new Array(content7NumberOfArticles).fill(initArticlePreview),
    },
}

const initHomePageContent8: HomePageContent8 = {
    categoryWithArticles: {
        categoryName: "",
        articles: new Array(content8NumberOfArticles).fill(initArticlePreview),
    },
}

const initHomePageContent9: HomePageContent9 = {
    categoryWithArticles: {
        categoryName: "",
        articles: new Array(content9NumberOfArticles).fill(initArticlePreview),
    },
}

const initHomePageContent10: HomePageContent10 = {
    categoryWithArticles: {
        categoryName: "",
        articles: new Array(content10NumberOfArticles).fill(initArticlePreview),
    },
}

const initHomePageContent11: HomePageContent11 = {
    articles: new Array(content11NumberOfArticles).fill(initArticlePreview),
}

const initHomePageContent12: HomePageContent12 = {
    categories: new Array(content12NumberOfCategories).fill(initCategory),
}

const initHomePageContent13: HomePageContent13 = {
    authors: new Array(5).fill(initAuthor),
}

const getHref = (headlineTypeName: string, slug: string): Route => {
    switch (headlineTypeName) {
        case HeadlineType.SinglePhoto:
            return ("/single-4/" + slug) as Route

        case HeadlineType.SingleVideo:
            return ("/single-video/" + slug) as Route

        case HeadlineType.SingleAudio:
            return ("/single-audio/" + slug) as Route

        case HeadlineType.MultiplePhoto:
            return ("/single-gallery/" + slug) as Route

        default:
            return "/not-found" as Route
    }
}

export {
    avatarColors,
    content11NumberOfArticles,
    content1NumberOfArticles,
    content2NumberOfArticles,
    defaultAuthor,
    defaultPostData,
    defaultTaxonomy,
    getHref,
    initArticlePreview,
    initAuthor,
    initHomePageContent1,
    initHomePageContent10,
    initHomePageContent11,
    initHomePageContent12,
    initHomePageContent13,
    initHomePageContent2,
    initHomePageContent3,
    initHomePageContent4,
    initHomePageContent5,
    initHomePageContent6,
    initHomePageContent7,
    initHomePageContent8,
    initHomePageContent9
}

