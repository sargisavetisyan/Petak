import { createSlice } from "@reduxjs/toolkit";
import { createArrayForInitialState } from "../../components/Saddle/createArray";

let area = []
for (let i = 35; i <= 150; i++) {
    area.push(i)
}

let floor = []
for (let i = 1; i < 23; i++) {
    floor.push(i)
}

let arr = [
    { name: 'room', elements: [1, 2, 3, 4, 5] },
    { name: 'photo', elements: [require("../../images/apartament1.png"), require("../../images/apartament3.png"), require("../../images/apartament4.png"), require("../../images/apartament2.png")] },
    { name: 'region', elements: ['Yerevan', 'Shirak', 'Kotayq', 'Syuniq', 'Gexarquniq', 'Lori', 'Vayoc Dzor', 'Tavuhs', 'Armavir', 'Ararat', 'Aragacotn'] },
    { name: 'street', elements: ['Aram Xachatryan', 'Shiraki', 'Amiryan', 'Shiraz', 'Xanjyan', 'Garegin Njdeh'] },
    { name: 'area', elements: [...area] },
    { name: 'floor', elements: [...floor] },
]

const initialState = {
    apartaments: [...createArrayForInitialState(100, arr)],
    apartament: {}
}

export const apartamentsSlice = createSlice({
    name: 'apartament',
    initialState,
    reducers: (state, action) => {

    }
})

export default apartamentsSlice.reducer