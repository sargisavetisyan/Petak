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
    {
        name: 'photo',
        elements: [
            'https://i.pinimg.com/originals/84/da/b2/84dab2fc6006bc0509506c46453f2d73.jpg',
            'https://bestdesignideas.com/wp-content/uploads/2015/07/Modern-duplex-apartment-in-New-York-living-room-and-dining-room.jpg',
            'https://nakvartire.com/wp-content/uploads/2020/03/s1200-23.jpg',
            'https://static.tildacdn.com/tild3066-3432-4332-a632-663263643938/gorod-penthaus-inter.jpg']
    },
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