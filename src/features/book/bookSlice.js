import { createSlice } from "@reduxjs/toolkit";
import { createArrayForInitialState } from "../../components/Saddle/createArray";

let arr = [
    { name: 'title', elements: ['Samvel', 'Gevorg Marzpetuni', 'Haci Xndir', 'Kaycer'] },
    { name: 'auter', elements: ['Raffi', 'Muracan', 'Jyul Vern', 'Cerenc'] },
    { name: 'photo', elements: [require("../../images/book1.png"), require("../../images/book2.png"), require("../../images/book3.png"), require("../../images/book4.png"), require("../../images/book5.png"), require("../../images/book6.png"), require("../../images/book7.png"),] },
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