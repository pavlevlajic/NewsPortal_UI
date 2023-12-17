import { HomePageViewModel } from "@/models/homePage/homePageViewModel"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { CancelToken } from "axios"
import axiosInstance from "./axiosInstance"
import { RootState } from "./store"

type HomePageState = {
    homePageContent: HomePageViewModel | null
}

const initialState: HomePageState = {
    homePageContent: null,
}

export const getHomePageContent = createAsyncThunk(
    "HomePage/Get_Home_Page_Content",
    async (cancelToken: CancelToken) => {
        const result = (await axiosInstance.get("/home/get-home-page-content", {
            cancelToken,
        })) as HomePageViewModel // Todo: ApiResponse

        console.log({ result })

        return result
    }
)

const homePageSlice = createSlice({
    name: "homePage",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getHomePageContent.fulfilled, (state, action) => {
            state.homePageContent = action.payload
        })
    },
})

export const selectHomePageContent = (
    state: RootState
): HomePageViewModel | null => state.homePage.homePageContent

export default homePageSlice.reducer
