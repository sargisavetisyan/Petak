import { createSlice } from "@reduxjs/toolkit";
import { createArrayForInitialState } from "../../components/Saddle/createArray";

let arr = [
    { name: 'title', elements: ['Samvel', 'Gevorg Marzpetuni', 'Haci Xndir', 'Kaycer'] },
    { name: 'auter', elements: ['Raffi', 'Muracan', 'Jyul Vern', 'Cerenc'] },
    {
        name: 'photo',
        elements: [
            'https://cdn1.ozone.ru/s3/multimedia-4/6012996220.jpg',
            'https://prussia.online/Data/Book/v-/v-ad-s-velikoy-germaniey/img/cover.jpg',
            'https://kbimages1-a.akamaihd.net/3e48b245-8f37-48ad-8cc4-cc2f4736dde1/1200/1200/False/the-truffle-with-weddings.jpg',
            'https://avatars.mds.yandex.net/i?id=d6c568a57f18c5772d0491fa4f546ede-4883974-images-thumbs&n=13',
            'https://tn.fishki.net/26/upload/post/201408/16/1294506/2_16.jpg',
            'https://i.pinimg.com/736x/75/cf/99/75cf99345c65dc0d571530ae3fbf85d4--book-covers-reading.jpg',
            'https://bashny.net/uploads/images/00/00/13/2014/08/16/d32c4d185b.jpg']
    },
    { name: 'page', elements: [700, 500, 350, 450] },
    { name: 'category', elements: ['Classics', 'Fantasy', 'Adventure stories', 'Humour and satire'] },
]

const initialState = {
    books: [...createArrayForInitialState(100, arr)],
    book: {},
}

export const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: (state, action) => {

    }
})

export default bookSlice.reducer