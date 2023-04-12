import { createSlice } from "@reduxjs/toolkit"
import { createArrayForInitialState } from "../../components/Saddle/createArray"

let year = []
for (let i = 2000; i <= +new Date().getFullYear(); i++) {
    year.push(i)
}

let arr = [
    { name: 'isPrivate', elements: ['Private', 'Agency'] },
    { name: 'owner', elements: ['Andranik', 'Anna', 'Ani', 'Vazgen'] },
    { name: 'ownerPhoto', elements: [require('../../images/men1.png'), require('../../images/men2.jpg'), require('../../images/men3.jpg')] },
    { name: 'photo', elements: ['https://static.carthrottle.com/workspace/uploads/posts/2016/02/7dfb2cfdaf503f1d9435624bbcc33a8e.jpg', 'https://sportishka.com/uploads/posts/2022-11/1667492837_35-sportishka-com-p-mashina-audi-krasivo-35.jpg', 'https://avatars.mds.yandex.net/i?id=f39d7ca9760a67fbaa3a22d66a5a60ef5b338db7-9167398-images-thumbs&n=13', 'https://damion.club/uploads/posts/2022-09/1663710155_42-damion-club-p-krasnaya-mashina-mazda-vkontakte-52.jpg', 'https://sportishka.com/uploads/posts/2022-11/thumbs/1667496170_31-sportishka-com-p-mashina-khonda-instagram-37.jpg'] },
    { name: 'region', elements: ['Yerevan', 'Shirak', 'Kotayq', 'Syuniq', 'Gexarquniq', 'Lori', 'Vayoc Dzor', 'Tavuhs', 'Armavir', 'Ararat', 'Aragacotn'] },
    { name: 'year', elements: [...year] },
    { name: 'mark', elements: ['Golf', 'Audi', 'Mazda', 'Honda', 'Bmw',] },
    { name: 'type', elements: ['GLC-Class', 'Camry 2.5', 'E-45'] },
    { name: 'bodyType', elements: ['sedan', 'coupe', 'sport car', 'station vagon', 'heatchback'] },
    { name: 'trusk', elements: [' all-wheel drive', 'front wheel drive', 'rear wheel drive'] },
    { name: 'door', elements: [2, 4] },
    { name: 'gearbox', elements: ['Automatic', 'Mexanic', 'Robot', 'Variator'] },
    { name: 'color', elements: ['red', 'bleck', 'white', 'green'] },
    { name: 'vehicleCategory', elements: ['passenqer', 'truck', 'minibus', 'bus'] },
    {
        name: 'description',
        elements: [
            'skgjlsjglsjgoidjgdogjfgjdoijgiofgjifjiog',
            'jsdfrlhgkgjfh hg huhgui hhi ish suhgg hiuf iuhs hih uyg h  i sy gkh  ks s jsdfrlhgkgjfh hg huhgui hhi ish suhgg hiuf iuhs hih uyg h  i sy gkh  ks s jsdfrlhgkgjfh hg huhgui hhi ish suhgg hiuf iuhs hih uyg h  i sy gkh  ks s jsdfrlhgkgjfh hg huhgui hhi ish suhgg hiuf iuhs hih uyg h  i sy gkh  ks s jsdfrlhgkgjfh hg huhgui hhi ish suhgg hiuf iuhs hih uyg h  i sy gkh  ks s '
        ]
    },
    { name: 'price', elements: ['33.900', '47.000', '140.000', '65.500 ', '140.000 '] },
    { name: 'urgent', elements: [false, true] },
]

const initialState = {
    cars: [...createArrayForInitialState(25, arr)],
    carMarks: [],
    carPrivate: [],
    car: {}
}

export const carSlice = createSlice({
    name: 'car',
    initialState,
    reducers: {
        feachCar: (state, action) => {
            state.car = { ...state.cars.find(el => el.id === +action.payload) }
        },
        feachCars: (state, action) => {
            state.carMarks = state.cars.filter(car => car.mark === action.payload)
        },
        carLiked: (state, action) => {
            let car = state.cars.find(car => car.id === action.payload)
            car.liked = !car.liked
        },
        feachPrivate: (state, action) => {
            if (action.payload) {
                state.carPrivate = [...state.carPrivate, ...state.cars.filter(car => car.isPrivate === action.payload)]
            } else {
                state.carPrivate = [...state.carPrivate.filter(car => car.isPrivate !== 'Private')]
            }
        },
        feachAgency: (state, action) => {
            if (action.payload) {
                state.carPrivate = [...state.carPrivate, ...state.cars.filter(car => car.isPrivate === action.payload)]
            } else {
                state.carPrivate = [...state.carPrivate.filter(car => car.isPrivate !== 'Agency')]
            }
        },
    }
})

export default carSlice.reducer

export const { feachCar, feachCars, carLiked, feachPrivate, feachAgency } = carSlice.actions