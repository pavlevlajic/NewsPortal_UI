import { HomePageViewModel } from "@/models/homePage/homePageViewModel"
import HomePage1Content from "./HomePage1Content"

async function getData() {
    const res = await fetch(
        `https://pavlevlajic.com/api/home/get-home-page-content`,
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

export default async function HomePage() {
    const content: HomePageViewModel = await getData()

    return (
        <div className="nc-PageHomeDemo6 relative mt-4">
            <div className="relative overflow-hidden">
                <HomePage1Content content={content} />
            </div>
        </div>
    )
}
