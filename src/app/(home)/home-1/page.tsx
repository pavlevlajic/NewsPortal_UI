import HomePage1Content from "./HomePage1Content"

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
