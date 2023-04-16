import { createSlice } from "@reduxjs/toolkit"
import { createArrayForInitialState } from "../../components/Saddle/createArray"

let arr = [
    { name: 'work', elements: ['waiter/waitress', 'developer', 'driver', 'teacher', 'builder'] },
    { name: 'salary', elements: [200, 300, 400, 500, 600] },
    { name: 'sector', elements: ['Restaurants', 'Media and Communication', 'Leisure and Hospitality', 'Construction', 'It', 'Education'] },
    {
        name: 'photo',
        elements: [
            'https://avatars.mds.yandex.net/i?id=6ad736739fac1687f0ce46e7a49d66bd919c1a22-5381369-images-thumbs&n=13',
            'https://i.pinimg.com/originals/78/2e/bf/782ebf71abf68fddff28151223ddd1ce.jpg',
            'https://avatars.mds.yandex.net/i?id=860213a98364f26312772528c53b165d-5285341-images-thumbs&n=13',
            'https://avatars.mds.yandex.net/i?id=4bf009016af0ce42816799a552ee35e673bf07e3-4284908-images-thumbs&n=13',
            'https://avatars.mds.yandex.net/i?id=c01ddc564b299b08d91bd7561712fa0be5c3e5ae-7946262-images-thumbs&n=13',
            'https://www.cnkakademi.com/view/uploads/hizmet/611103abf19dd162850500362.jpg',
            'https://i.ytimg.com/vi/IipNsPAPVa0/maxresdefault.jpg',
            'https://klike.net/uploads/posts/2020-11/1606552789_10.jpg'
        ]
    },
    { name: 'region', elements: ['Avan', 'Shebgavit', 'Kentron', 'Ajapnyak', 'Nor Nork'] },
    { name: 'character', elements: ['temporary', 'permanent', 'hourly rate'] },
    { name: 'rate', elements: ['Full time', 'Part time', 'Hourly'] },

]

const initialState = {
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