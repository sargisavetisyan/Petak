import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    categorys: [
        {
            name: 'Job',
            departments: [
                { name: 'Technologies and IT', departments: ['Programming and development', 'Testing and QA', 'Product and project management', 'Network administration', 'Support and customer service', 'Telecommunications and communications', 'Science and Engineering', 'Other'] },
                { name: 'Marketing, design and media', departments: ['Marketing', 'Advertising and PR', 'Media and Design', 'Journalism and publishing'] },
                { name: 'Service sector', departments: ['Transport and auto business', 'Trade and sales', 'Restaurants, clubs and cooking', 'Tourism and hotels', 'Beauty, fitness and sports', 'Cleaning works', 'Security', 'Other'] },
                { name: 'Business and law', departments: ['Finance, accounting and auditing', 'Law and notary', 'Clerical and human resource management', 'Secretary'] },
                { name: 'Craft and production', departments: ['Construction and repair', 'Warehouses and logistics', 'Factories and production', 'Agriculture and animal husbandry', 'Other'] },
                { name: 'Other work', departments: ['Education and training', 'Medicine and pharmacy', 'Work for students', 'Other'] },
            ]
        },
        {
            name: 'Electronic',
            departments: [

            ]
        },
        {
            name: 'Car',
            departments: [
                // hl@ vor
                { name: 'Technologies and IT', departments: ['Programming and development', 'Testing and QA', 'Product and project management', 'Network administration', 'Support and customer service', 'Telecommunications and communications', 'Science and Engineering', 'Other'] },
                { name: 'Marketing, design and media', departments: ['Marketing', 'Advertising and PR', 'Media and Design', 'Journalism and publishing'] },
                { name: 'Service sector', departments: ['Transport and auto business', 'Trade and sales', 'Restaurants, clubs and cooking', 'Tourism and hotels', 'Beauty, fitness and sports', 'Cleaning works', 'Security', 'Other'] },
                { name: 'Business and law', departments: ['Finance, accounting and auditing', 'Law and notary', 'Clerical and human resource management', 'Secretary'] },
                { name: 'Craft and production', departments: ['Construction and repair', 'Warehouses and logistics', 'Factories and production', 'Agriculture and animal husbandry', 'Other'] },
                { name: 'Other work', departments: ['Education and training', 'Medicine and pharmacy', 'Work for students', 'Other'] },
            ]
        },
    ]
}

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {

    }
})

export default categorySlice.reducer