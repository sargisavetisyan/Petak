import { createSlice } from "@reduxjs/toolkit";
import { createArrayForInitialState } from "../../components/Saddle/createArray";

let arr = [
    { name: 'mark', elements: ['Apple Iphone', 'Samsung', 'Nokia', 'Honor'] },
    { name: 'model', elements: ['14 pro', ' Galaxy s23', 'Galaxy s21', 'X8', '13'] },
    {
        name: 'photo',
        elements: [
            'https://avatars.mds.yandex.net/i?id=76b31afe69d00c5c4df30a27e1636f046e82b3d6-9217411-images-thumbs&n=13',
            'https://index-soft.ru/image/cache/catalog/im/pimg_10147-1500x1500.jpg',
            'https://i.ytimg.com/vi/1A4-WVhDFzc/maxresdefault.jpg',
            'https://cdn.mos.cms.futurecdn.net/c68202385d3ee79dce95c1bc06b2825a.jpg'
        ]
    },
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