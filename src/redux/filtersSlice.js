import { createSlice } from "@reduxjs/toolkit";
export const selectNameFilter = (state) => state.filters.name.toLowerCase()

const initialState = {
    name: ""
}

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        changeFilter(state, action) {
            state.name = action.payload
        }
    }
})

export const { changeFilter } = filterSlice.actions
export default filterSlice.reducer