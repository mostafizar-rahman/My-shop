const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    whitList: [],
    message: ''
}
const whiteListSlice = createSlice({
    name: "addWhiteList",
    initialState,
    reducers: {
        addToWhiteList: (state, action) => {
            console.log(action)
            const isAviable = state.whitList.find(({ id }) => id === action.payload)
            if (isAviable) {
                state.message = "This product is avibale"
            }
            else {
                state.whitList.push({id: action.payload})
            }
        }
    }
})

export const { addToWhiteList } = whiteListSlice.actions
export default whiteListSlice.reducer