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
                state.whitList.push({ id: action.payload })
            }
        },
        removeToWhitList: (state, action) => {
            console.log(action)
            const isAviable = state.whitList.filter(({ id }) => id !== action.payload)
            state.whitList = isAviable
        }
    }
})

export const { addToWhiteList, removeToWhitList } = whiteListSlice.actions
export default whiteListSlice.reducer