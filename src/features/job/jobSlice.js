import { createSlice } from "@reduxjs/toolkit"
import { createArrayForInitialState } from "../../components/Saddle/createArray"

let arr = [
    { name: 'work', elements: ['waiter/waitress', 'developer', 'driver', 'teacher', 'builder'] },
    { name: 'salary', elements: [200, 300, 400, 500, 600] },
    { name: 'sector', elements: ['Restaurants', 'Media and Communication', 'Leisure and Hospitality', 'Construction', 'It', 'Education'] },
    { name: 'photo', elements: [require("../../images/Rectangle 482.png"), require("../../images/developer.jpg"), require("../../images/driver.jpg"), require("../../images/teacher.jpg"), require("../../images/bilder.jpg"), require("../../images/job1.png"), require("../../images/job2.png"), require("../../images/job3.png")] },
    { name: 'region', elements: ['Avan', 'Shebgavit', 'Kentron', 'Ajapnyak', 'Nor Nork'] },
    { name: 'character', elements: ['temporary', 'permanent', 'hourly rate'] },
    { name: 'rate', elements: ['Full time', 'Part time', 'Hourly'] },

]

const initialState = {
    situations: ['Private', 'Agency'],
    operations: ['Sale', 'Exchange', 'Looking for', 'Ads with photos'],
    dataRegionsCursPriceCategorys: [
        {
            name: 'Location',
            elements: [
                { id: 0, name: 'Yerevan', active: false, regions: ['Ajapnyak', 'Arabkir', 'Avan', 'Davtashen', 'Erebuni', 'Kanaqer-Zetun', 'Kentron', 'Malatia-Sebastia', 'Nork-Marash', 'Nor-Nork', 'Nubarashen', 'Shengavit'] },
                { id: 1, name: 'Aragacotn', active: false, regions: ['Ajapnyak', 'Arabkir', 'Avan', 'Davtashen', 'Erebuni', 'Kanaqer-Zetun', 'Kentron', 'Malatia-Sebastia', 'Nork-Marash', 'Nor-Nork', 'Nubarashen', 'Shengavit'] },
                { id: 2, name: 'Ararat', active: false, regions: ['Artashat', 'Ararat', 'Ayntap', 'Azatashen', 'Dashtavan', 'Gexanist', 'Getapnya', 'Xukasavan', 'Hayanist', 'Hovtashat', 'Xachpar', 'Marmarashen', 'Masis', 'Mxchyan', 'Nor Xarberd', 'Taperakan', 'Vedi', 'Vosketap'] },
                { id: 3, name: 'Armavir', active: false, regions: ['Armavir', 'Ejmiacin', 'Argavand', 'Baxramyan', 'Merdzavan', 'Mecamor', 'Musaler', 'Paraqar', 'Tairov', 'Axavnatun', 'Aknashen', 'Araqs', 'Arevashat', 'Arshaluys', 'Gay', 'Gribaedov', 'Janfida', 'Jrarbi', 'Lernamerdz', 'Lusagyux', 'Mrgashat', 'Sardarapat'] },
                { id: 4, name: 'Gexarquniq', active: false, regions: ['Armavir', 'Ejmiacin', 'Argavand', 'Baxramyan', 'Merdzavan', 'Mecamor', 'Musaler', 'Paraqar', 'Tairov', 'Axavnatun', 'Aknashen', 'Araqs', 'Arevashat', 'Arshaluys', 'Gay', 'Gribaedov', 'Janfida', 'Jrarbi', 'Lernamerdz', 'Lusagyux', 'Mrgashat', 'Sardarapat'] },
                { id: 5, name: 'Kotayq', active: false, regions: ['Abovyan', 'Ejmiacin', 'Argavand', 'Baxramyan', 'Merdzavan', 'Mecamor', 'Musaler', 'Paraqar', 'Tairov', 'Axavnatun', 'Aknashen', 'Araqs', 'Arevashat', 'Arshaluys', 'Gay', 'Gribaedov', 'Janfida', 'Jrarbi', 'Lernamerdz', 'Lusagyux', 'Mrgashat', 'Sardarapat'] },
                { id: 6, name: 'Lori', active: false, regions: ['Abovyan', 'Ejmiacin', 'Argavand', 'Baxramyan', 'Merdzavan', 'Mecamor', 'Musaler', 'Paraqar', 'Tairov', 'Axavnatun', 'Aknashen', 'Araqs', 'Arevashat', 'Arshaluys', 'Gay', 'Gribaedov', 'Janfida', 'Jrarbi', 'Lernamerdz', 'Lusagyux', 'Mrgashat', 'Sardarapat'] },
                { id: 7, name: 'Shirak', active: false, regions: ['Abovyan', 'Ejmiacin', 'Argavand', 'Baxramyan', 'Merdzavan', 'Mecamor', 'Musaler', 'Paraqar', 'Tairov', 'Axavnatun', 'Aknashen', 'Araqs', 'Arevashat', 'Arshaluys', 'Gay', 'Gribaedov', 'Janfida', 'Jrarbi', 'Lernamerdz', 'Lusagyux', 'Mrgashat', 'Sardarapat'] },
                { id: 8, name: 'Syuniq', active: false, regions: ['Abovyan', 'Ejmiacin', 'Argavand', 'Baxramyan', 'Merdzavan', 'Mecamor', 'Musaler', 'Paraqar', 'Tairov', 'Axavnatun', 'Aknashen', 'Araqs', 'Arevashat', 'Arshaluys', 'Gay', 'Gribaedov', 'Janfida', 'Jrarbi', 'Lernamerdz', 'Lusagyux', 'Mrgashat', 'Sardarapat'] },
                { id: 9, name: 'Tavuhs', active: false, regions: ['Abovyan', 'Ejmiacin', 'Argavand', 'Baxramyan', 'Merdzavan', 'Mecamor', 'Musaler', 'Paraqar', 'Tairov', 'Axavnatun', 'Aknashen', 'Araqs', 'Arevashat', 'Arshaluys', 'Gay', 'Gribaedov', 'Janfida', 'Jrarbi', 'Lernamerdz', 'Lusagyux', 'Mrgashat', 'Sardarapat'] },
                { id: 10, name: 'Vayoc Dzor', active: false, regions: ['Abovyan', 'Ejmiacin', 'Argavand', 'Baxramyan', 'Merdzavan', 'Mecamor', 'Musaler', 'Paraqar', 'Tairov', 'Axavnatun', 'Aknashen', 'Araqs', 'Arevashat', 'Arshaluys', 'Gay', 'Gribaedov', 'Janfida', 'Jrarbi', 'Lernamerdz', 'Lusagyux', 'Mrgashat', 'Sardarapat'] },
            ]
        },
        { name: 'Currency', elements: ['Armenian Dram', 'US Dollar', 'Euro', 'Russian Ruble'] },
        { name: 'Price', elements: [0, 1000] },
        {
            name: 'Category', elements: [
                { name: 'Electronics', items: ['Notebooks', 'Tablets', 'Peripherals', 'Parts', 'Accessories'] },
                { name: 'Computers', items: ['Notebooks', 'Tablets', 'Peripherals', 'Parts', 'Accessories'] },
                { name: 'Games and Consoles', items: ['Notebooks', 'Tablets', 'Peripherals', 'Parts', 'Accessories'] },
                { name: 'TV and Video', items: ['Notebooks', 'Tablets', 'Peripherals', 'Parts', 'Accessories'] },
                { name: 'Photo and Video Equipment', items: ['Notebooks', 'Tablets', 'Peripherals', 'Parts', 'Accessories'] },
                { name: 'Audio', items: ['Notebooks', 'Tablets', 'Peripherals', 'Parts', 'Accessories'] },
                { name: 'Everything Else', items: ['Notebooks', 'Tablets', 'Peripherals', 'Parts', 'Accessories'] },
            ]
        }
    ],
    jobs: [...createArrayForInitialState(1001, arr)],
    job: {},
    jobsFields: [],
}

export const jobSlice = createSlice({
    name: 'job',
    initialState,
    reducers: {
        isActiveRegion: (state, action) => {
            state.dataRegionsCursPriceCategorys.find(el => {
                el.elements.map(el => {
                    if (el.regions && el.id === action.payload) {
                        return el.active = !el.active
                    }
                })
            })
        },
        JobLiked: (state, action) => {
            let job = state.jobs.find(job => job.id === action.payload)
            job.liked = !job.liked
        },
        feachJob: (state, action) => {
            let job = state.jobs.find(job => job.id === +action.payload)
            state.job = { ...job }
        },
        feachJobField: (state, action) => {
            state.jobsFields = state.jobs.filter(job => job.field === action.payload)
        },
    }
})

export default jobSlice.reducer

export const { isActiveRegion, JobLiked, feachJob, feachJobField } = jobSlice.actions