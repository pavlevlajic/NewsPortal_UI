import { Metadata } from "next"
import HomePage1Content from "./HomePage1Content"

export const metadata: Metadata = {
    title: "Home page",
    description: "Explore all latest news on our portal",
}

export default function HomePage() {
    return <HomePage1Content />
}
