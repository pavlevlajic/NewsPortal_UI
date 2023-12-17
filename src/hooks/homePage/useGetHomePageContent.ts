"use client"

import {
    getHomePageContent,
    selectHomePageContent,
} from "@/app/api/homePageSlice"
import { useAppDispatch, useAppSelector } from "@/app/api/hooks"
import axios from "axios"
import { useEffect } from "react"

const useGetHomePageContent = () => {
    const dispatch = useAppDispatch()
    const homePageContent = useAppSelector(selectHomePageContent)

    useEffect(() => {
        const cancelToken = axios.CancelToken.source()

        dispatch(getHomePageContent(cancelToken.token))

        return () => {
            cancelToken.cancel()
        }
    }, [])

    return { homePageContent }
}

export default useGetHomePageContent
