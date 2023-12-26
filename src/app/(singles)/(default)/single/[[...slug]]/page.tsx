import { SinglePageViewModel } from "@/models/singlePage/singlePageViewModel"
import { Metadata } from "next"
import SingleContent from "./SingleContent"

interface MetadataProps {
    params: { slug: string }
}

export async function generateMetadata({
    params,
}: MetadataProps): Promise<Metadata> {
    // read route params
    const slug = params.slug

    // fetch data
    const singlePageContent: SinglePageViewModel = await fetch(
        `https://pavlevlajic.com/api/single/get-single-page-content?slug=${
            slug || "article-number-102"
        }`,
        {
            headers: {
                "Time-Zone": Intl.DateTimeFormat().resolvedOptions().timeZone,
            },
        }
    ).then((res) => res.json())

    const article = singlePageContent.article

    return {
        title: article.title,
        description: article.briefContent,
        keywords: article.tags,
        authors: [
            {
                name: `${article.authorFirstName} ${article.authorLastName}`,
                url: `https://news-portal-ui-taupe.vercel.app/author/${article.authorUserName}`,
            },
        ],
        applicationName: "News Portal",
        category: article.categoryName,
        twitter: {
            title: article.title,
            description: article.briefContent,
            images: [article.singlePhoto?.fileUrl ?? ""],
            creator: `${article.authorFirstName} ${article.authorLastName}`,
            site: `https://news-portal-ui-taupe.vercel.app/single/${article.slug}`,
        },
        openGraph: {
            title: article.title,
            description: article.briefContent,
            type: "article",
            authors: [`${article.authorFirstName} ${article.authorLastName}`],
            images: [article.singlePhoto?.fileUrl ?? ""],
            siteName: "News Portal",
            publishedTime: article.formattedDate,
            tags: article.tags,
            url: `https://news-portal-ui-taupe.vercel.app/single/${article.slug}`,
        },
    }
}

async function getData(slug: string) {
    const res = await fetch(
        `https://pavlevlajic.com/api/single/get-single-page-content?slug=${
            slug || "article-number-1"
        }`,
        {
            headers: {
                "Time-Zone": Intl.DateTimeFormat().resolvedOptions().timeZone,
            },
        }
    )

    if (!res.ok) {
        throw new Error("Failed to fetch data")
    }

    return res.json()
}

export const revalidate = 0 // seconds

export default async function Page({
    params: { slug },
}: {
    params: { slug: string }
}) {
    const data: SinglePageViewModel = await getData(slug)

    return <SingleContent data={data} />
}
