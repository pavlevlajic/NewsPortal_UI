import { Sidebar } from "@/app/(singles)/Sidebar"
import SingleContent from "@/app/(singles)/SingleContent"
import SingleHeader from "@/app/(singles)/SingleHeader"
import SingleRelatedPosts from "@/app/(singles)/SingleRelatedPosts"
import NcImage from "@/components/NcImage/NcImage"
import { SinglePageViewModel } from "@/models/singlePage/singlePageViewModel"
import { Metadata } from "next"

type MetadataProps = {
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
            slug || "article-number-1"
        }`
    ).then((res) => res.json())

    // optionally access and extend (rather than replace) parent metadata
    // const previousImages = (await parent)?.openGraph?.images || []

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
            // card: "app",
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
        }`
    )
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data")
    }

    return res.json()
}

export const revalidate = 60 // seconds

export default async function Page({
    params: { slug },
}: {
    params: { slug: string }
}) {
    const data = await getData(slug)

    return (
        <>
            <div className={`nc-PageSingle pt-8 lg:pt-16`}>
                <header className="container rounded-xl">
                    <div className="max-w-screen-md mx-auto">
                        <SingleHeader title={data.article.title} />
                    </div>
                </header>

                {/* FEATURED IMAGE */}
                <NcImage
                    alt="single"
                    containerClassName="container my-10 sm:my-12"
                    className="w-full rounded-xl"
                    src={
                        data.article.singlePhoto.fileUrl ||
                        "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg"
                    }
                    width={1260}
                    height={750}
                    sizes="(max-width: 1024px) 100vw, 1280px"
                />

                <div className={`relative`}>
                    <div className="container flex flex-col my-10 lg:flex-row ">
                        <div className="w-full lg:w-3/5 xl:w-2/3 xl:pe-20">
                            <SingleContent
                                htmlContent={data.article.htmlContent}
                            />
                        </div>
                        <div className="w-full mt-12 lg:mt-0 lg:w-2/5 lg:ps-10 xl:ps-0 xl:w-1/3">
                            <Sidebar />
                        </div>
                    </div>

                    {/* RELATED POSTS */}
                    <SingleRelatedPosts />
                </div>
            </div>
        </>
    )
}
