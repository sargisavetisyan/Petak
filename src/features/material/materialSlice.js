import { createSlice } from "@reduxjs/toolkit";
import { createArrayForInitialState } from "../../components/Saddle/createArray";

let arr = [
    { name: 'name', elements: ['Posters', 'Spanish tiles', 'Roof coverings', 'Washable paints'] },
    { name: 'photo', elements: [require("../../images/material1.png"), require("../../images/material2.png"), require("../../images/material3.png"), require("../../images/material4.png")] }
]

const initialState = {
    materials: [...createArrayForInitialState(100, arr)],
    material: {},
}

export const materialSlice = createSlice({
    name: 'material',
    initialState,
    reducers: (state, action) => {

    }
})

export default materialSlice.reducer