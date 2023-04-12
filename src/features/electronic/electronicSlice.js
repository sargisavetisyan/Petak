import { createSlice } from "@reduxjs/toolkit"
import { createArrayForInitialState } from "../../components/Saddle/createArray"

let arr = [
    {
        name: 'photo',
        elements: [
            'https://peopletalk.ru/wp-content/uploads/2020/06/1_1200h800-2048x1365.jpg',
            'https://www.digitallife.gr/wp-content/uploads/2018/10/IQOS-3-4.jpg',
            'https://iqosdubai.ae/wp-content/uploads/2020/10/PicsArt_10-29-11.44.27.jpg',
            'http://taudientu.net/wp-content/uploads/2020/03/thuoc-la-iqos.jpg',
            'https://img.shoplineapp.com/media/image_clips/5c14d6219091ce000fe8a6cc/original.png?1544869391',
            'https://static-sl.insales.ru/files/1/6884/10173156/original/3%D0%BA%D0%BE%D0%BC%D0%BF%D0%BB%D0%B5%D0%BA%D1%82_c5493dc051197ad374e8104c098c2abc.jpg'
        ]
    },
    { name: 'model', elements: ['IQOS 3 DUO', 'IQOS 1', 'IQOS 2', 'IQOS 3', 'IQOS 4', 'IQOS 5'] },
    { name: 'region', elements: ['Yerevan', 'Shirak', 'Kotayq', 'Syuniq', 'Gexarquniq', 'Lori', 'Vayoc Dzor', 'Tavuhs', 'Armavir', 'Ararat', 'Aragacotn'] },
    { name: 'shop', elements: ['City', 'Eldorado', 'Vega', 'VLV'] },
    { name: 'price', elements: [25, 8, 15, 40, 33] },
    { name: 'price', elements: [25, 8, 15, 40, 33] },
    { name: 'phone', elements: ['+374(55)56-94-78', '+374(93)86-64-32', '+374(91)06-04-08', '+374(33)86-67-70'] },
    { name: 'compania', elements: ['Armenia', 'Inch vor anun', 'Petak'] },
    {
        name: 'description', elements: [
            'IQOS is a cigarette heating system that uses HeatControl technology. Thanks to the latter, the cigarette is not burned, but heated, and nicotine is produced without fire, smoke and ash.',
            'A device that heats cigarettes instead of burning them. Easy and simple. Less smell compared to',
            'The new IQOS 3 DUO has the technically fastest and most powerful handle compared to all IQOS models. This device provides 2 consecutive uses without recharging.'
        ]
    },
]

const initialState = {
    electronics: [...createArrayForInitialState(150, arr)]
}

export const electroniSlice = createSlice({
    name: 'electronic',
    initialState,
    reducers: {

    }
})

export default electroniSlice.reducer