import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    users: [
        { id: 1, name: 'Armen', email: 'armen@mail.ru', password: '111111' },
        { id: 2, name: 'Karen', email: 'karen@mail.ru', password: '222222' },
        { id: 3, name: 'Ani', email: 'ani@mail.ru', password: '333333' },
        { id: 4, name: 'Anna', email: 'anna@mail.ru', password: '444444' }
    ],
    user: {},
    responseEmail: false,
    responsePassword: false,
    authentication: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        verifyUser: (state, action) => {
            let user = state.users.find(user => user.email === action.payload.email && user.password === action.payload.password)
            if (user) {
                state.user = { ...user }
                state.authentication = true
                state.responseEmail = false
                state.responsePassword = false

            } else if (state.users.some(user => user.email === action.payload.email && user.password !== action.payload.password)) {
                state.responseEmail = false
                state.responsePassword = true
            } else if (state.users.some(user => user.email !== action.payload.email && user.password === action.payload.password)) {
                state.responseEmail = true
                state.responsePassword = false
            } else {
                if (state.users.every(user => user.email !== action.payload.email && user.password !== action.payload.password)) {
                    state.responseEmail = true
                    state.responsePassword = true
                }
            }
        },
        addUser: (state, action) => {
            state.users.push(action.payload)
        },
        exitUser: (state) => {
            state.user = {}
            state.authentication = false
        },
        defaultAuth: (state) => {
            state.authentication = false
        }
    }
})

export default userSlice.reducer

export const { verifyUser, addUser, exitUser, defaultAuth } = userSlice.actions