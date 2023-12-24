import { GetSinglePageRequest } from "@/models/requests/singlePage/getSinglePageRequest"
import { SinglePageViewModel } from "@/models/singlePage/singlePageViewModel"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "./axiosInstance"
import { RootState } from "./store"

type SinglePageState = {
    singlePageContent: SinglePageViewModel | null
}

const initialState: SinglePageState = {
    singlePageContent: null,
}

export const getSinglePageContent = createAsyncThunk(
    "SinglePage/Get_Single_Page_Content",
    async (request: GetSinglePageRequest) => {
        const result = (await axiosInstance.post(
            "/single/get-single-page-content",
            request
            // {
            //     cancelToken,
            // }
        )) as SinglePageViewModel // Todo: ApiResponse

        return result
    }
)

const singlePageSlice = createSlice({
    name: "singlePage",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getSinglePageContent.fulfilled, (state, action) => {
            state.singlePageContent = action.payload
        })
    },
})

export const selectSinglePageContent = (
    state: RootState
): SinglePageViewModel | null => state.singlePage.singlePageContent

export default singlePageSlice.reducer
