import { createSlice } from "@reduxjs/toolkit";
import { createArrayForInitialState } from "../../components/Saddle/createArray";

let arr = [
    { name: 'name', elements: ['Posters', 'Spanish tiles', 'Roof coverings', 'Washable paints'] },
    {
        name: 'photo',
        elements: [
            'https://www.nipromtex.ru/upload/iblock/62e/material_3027369_1280.jpg',
            'https://avatars.mds.yandex.net/i?id=73b3fa5259faa7fe99d51ca0b608471a89c8917c-7937305-images-thumbs&n=13',
            'https://avatars.mds.yandex.net/i?id=98a122db32003d4afc4c05c740e50e7299dc72ae-8289735-images-thumbs&n=13',
            'https://avatars.mds.yandex.net/i?id=cbe98e618aa2c8ad864bbe783c9a67196d3c9f8a-9065664-images-thumbs&n=13'
        ]
    }
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