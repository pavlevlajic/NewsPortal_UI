"use client"

import { useAppDispatch, useAppSelector } from "@/app/api/hooks"
import {
    getSinglePageContent,
    selectSinglePageContent,
} from "@/app/api/singlePageSlice"
import axios from "axios"
import { useEffect } from "react"

interface Props {
    slug: string
}

const useGetSinglePageContent = ({ slug }: Props) => {
    const dispatch = useAppDispatch()
    const singlePageContent = useAppSelector(selectSinglePageContent)

    useEffect(() => {
        console.log("Here");
        const cancelToken = axios.CancelToken.source()

        dispatch(getSinglePageContent({ articleId: slug }))

        return () => {
            cancelToken.cancel()
        }
    }, [])

    return { singlePageContent }
}

export default useGetSinglePageContent
