import { configureStore } from "@reduxjs/toolkit"
import homePageReducer from "./homePageSlice"
import singlePageReducer from "./singlePageSlice"

export const makeStore = () => {
    return configureStore({
        reducer: {
            homePage: homePageReducer,
            singlePage: singlePageReducer,
        },
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"]
