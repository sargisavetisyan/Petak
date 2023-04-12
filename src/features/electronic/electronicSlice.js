import { createSlice } from "@reduxjs/toolkit"
import { createArrayForInitialState } from "../../components/Saddle/createArray"

let arr = [
    { name: 'photo', elements: [require('../../images/IQOS 3 DUO.png'), require('../../images/IQOS 1.png'), require('../../images/IQOS 2.png'), require('../../images/IQOS 3.png'), require('../../images/IQOS 4.png'), require('../../images/IQOS 5.png')] },
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