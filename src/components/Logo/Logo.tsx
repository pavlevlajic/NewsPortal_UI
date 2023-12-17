import logoLightImg from "@/images/logo-light.png"
import logoImg from "@/images/logo.png"
import Link from "next/link"
import React from "react"
import LogoSvg from "./LogoSvg"

export interface LogoProps {
    img?: string
    imgLight?: string
}

const Logo: React.FC<LogoProps> = ({
    img = logoImg,
    imgLight = logoLightImg,
}) => {
    return (
        <Link
            href="/"
            className="ttnc-logo inline-block text-primary-6000 flex-shrink-0"
        >
            {/* THIS USE FOR MY MULTI DEMO */}
            {/* IF YOU ARE MY CLIENT. PLESE DELETE THIS CODE AND YOU YOUR IMAGE PNG BY BELLOW CODE */}
            <LogoSvg />
        </Link>
    )
}

export default Logo
