import { createSlice } from "@reduxjs/toolkit";
import { createArrayForInitialState } from "../../components/Saddle/createArray";

let arr = [
    { name: 'mark', elements: ['Apple Iphone', 'Samsung', 'Nokia', 'Honor'] },
    { name: 'model', elements: ['14 pro', ' Galaxy s23', 'Galaxy s21', 'X8', '13'] },
    { name: 'photo', elements: [require("../../images/mobile1.png"), require("../../images/mobile2.png"), require("../../images/mobile3.png"), require("../../images/mobile4.png")] },
    { name: 'gb', elements: [64, 128, 256, 512] },
    { name: 'color', elements: ['black', 'White', 'grey', 'golden'] },
]

const initialState = {
    mobiles: [...createArrayForInitialState(100, arr)],
    mobile: {},
}

export const mobileSlice = createSlice({
    name: 'mobile',
    initialState,
    reducers: {

    }
})

export default mobileSlice.reducer