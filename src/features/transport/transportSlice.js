import { createSlice } from "@reduxjs/toolkit";
import { createArrayForInitialState } from "../../components/Saddle/createArray";

let arr = [
    { name: 'type', elements: ['Transportation, Loader man', 'Tow truck', 'Transporation of construction waste', 'Transfer with minivan'] },
    { name: 'photo', elements: [require("../../images/transport1.png"), require("../../images/transport2.png"), require("../../images/transport3.png"), require("../../images/transport4.png")] },
]

const initialState = {
    transports: [...createArrayForInitialState(100, arr)],
    transport: {},
}

export const transportSlice = createSlice({
    name: 'transport',
    initialState,
    reducers: (state, action) => {

    }
})

export default transportSlice.reducer