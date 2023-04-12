import { createSlice } from "@reduxjs/toolkit";
import { createArrayForInitialState } from "../../components/Saddle/createArray";

let arr = [
    { name: 'type', elements: ['Transportation, Loader man', 'Tow truck', 'Transporation of construction waste', 'Transfer with minivan'] },
    {
        name: 'photo',
        elements: [
            'https://static.tildacdn.com/tild3233-6230-4230-a662-373036336362/1.jpg',
            'https://sun9-84.userapi.com/impg/6tGzuKW0ljhNtCND13l1Wbg9VknrKA86h1WyYQ/JJiRcVH36M4.jpg?size=940x706&quality=96&sign=3e9a6061db4d6093af6617c828b58726&c_uniq_tag=vGyRN7w6AJMbQ3-81PBQFrThGSiEwlUFX--qkgrcbno&type=album',
            'https://catherineasquithgallery.com/uploads/posts/2021-02/1612220958_158-p-fioletovii-fon-v-yandeks-taksi-183.jpg',
            'https://avatars.mds.yandex.net/i?id=b448d5f79a5301c122112d3689fd414fbec2201e-8154230-images-thumbs&n=13'
        ]
    },
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