import { PostAuthorType, PostDataType, TaxonomyType } from "@/data/types"
import { ArticlePreviewViewModel } from "@/models/article/articlePreviewViewModel"
import { Route } from "next"

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
    numberOfBookmarks: 0,
    numberOfComments: 0,
    numberOfReactions: 0,
}

const content1NumberOfArticles = 8
const content2NumberOfArticles = 4

export {
    avatarColors, content1NumberOfArticles, content2NumberOfArticles, defaultAuthor,
    defaultPostData,
    defaultTaxonomy,
    initArticlePreview
}

