import { Metadata } from "next"
import HomePage1Content from "./HomePage1Content"

export async function generateMetadata(
): Promise<Metadata> {
    // read route params
    const slug = "article-number-1"

    // fetch data
    const product = await fetch(
        `https://pavlevlajic.com/api/single/get-single-page-content?slug=${
            slug || "article-number-1"
        }`
    ).then((res) => res.json())

    // optionally access and extend (rather than replace) parent metadata
    // const previousImages = (await parent)?.openGraph?.images || []

    return {
        title: product.article.title,
        // openGraph: {
        //     images: ["/some-specific-page-image.jpg", ...previousImages],
        // },
    }
}

async function getData() {
    const res = await fetch(
        `https://pavlevlajic.com/api/home/get-home-page-content`
    )
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data")
    }

    return res.json()
}

export default async function HomePage() {
    const homePageContent = await getData()


    return (
        <div className="nc-PageHomeDemo6 relative mt-4">
            <div className="relative overflow-hidden">
                {/* Content 1: 8 latest articles */}
                {/* {homePageContent.content1.articles[0].title} */}
                <HomePage1Content homePageContent={homePageContent} />
            </div>
        </div>
    )
}
