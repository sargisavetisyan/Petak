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
    situations: ['Private', 'Agency'],
    operations: ['Sale', 'Exchange', 'Looking for', 'Ads with photos'],
    dataRegionsCursPriceCategorys: [
        {
            name: 'Location',
            elements: [
                { id: 0, name: 'Yerevan', active: false, regions: ['Ajapnyak', 'Arabkir', 'Avan', 'Davtashen', 'Erebuni', 'Kanaqer-Zetun', 'Kentron', 'Malatia-Sebastia', 'Nork-Marash', 'Nor-Nork', 'Nubarashen', 'Shengavit'] },
                { id: 1, name: 'Aragacotn', active: false, regions: ['Agarak', 'Aparan', 'Aragac', 'Aragacavan', 'Aragacotn', 'Ashtarak', 'Byurakan', 'Karbi', 'Kosh', 'Ohanavan', 'Oshakan', 'Parpi', 'Talin', 'Ujan', 'Voskevaz', 'Mastara', 'Muxni', 'Ushi'] },
                { id: 2, name: 'Ararat', active: false, regions: ['Artashat', 'Ararat', 'Ayntap', 'Azatashen', 'Dashtavan', 'Gexanist', 'Getapnya', 'Xukasavan', 'Hayanist', 'Hovtashat', 'Xachpar', 'Marmarashen', 'Masis', 'Mxchyan', 'Nor Xarberd', 'Taperakan', 'Vedi', 'Vosketap'] },
                { id: 3, name: 'Armavir', active: false, regions: ['Armavir', 'Ejmiacin', 'Argavand', 'Baxramyan', 'Merdzavan', 'Mecamor', 'Musaler', 'Paraqar', 'Tairov', 'Axavnatun', 'Aknashen', 'Araqs', 'Arevashat', 'Arshaluys', 'Gay', 'Gribaedov', 'Janfida', 'Jrarbi', 'Lernamerdz', 'Lusagyux', 'Mrgashat', 'Sardarapat'] },
                { id: 4, name: 'Gexarquniq', active: false, regions: ['Chambarak', 'Gavar', 'Martuni', 'Sevan', 'Vardenis', 'Akunq', 'Artanish', 'Gexarquniq', 'Lchap', 'Madina', 'Shoxakat', 'Sotq', 'Vardadzor', 'Eranos'] },
                { id: 5, name: 'Kotayq', active: false, regions: ['Abovyan', 'Axveran', 'Akunq', 'Aramus', 'A8gel', 'Arinj', 'Arzakan', 'Arzni', 'Balahovit', 'Byurexavan', 'Charencavan', 'DzorAxbyur', 'Garni', 'Goxt', 'Hrazdan', 'Jrvej', 'Qanaqeravan', 'Qasax', 'Mayakovski', 'Nor Gexi', 'Nor Gyux', 'Nor Hachn', 'Proshyan', 'Ptxni', 'Swlak', 'Caxkadzor', 'Verin Ptxni', 'Exvard', 'Zovuni', 'Artavazd', 'Gexadir', 'Gexashen', 'Hanqavan', 'Hatis', 'Hacavan', 'Jraber', 'Qaxsi', 'Sevaber', 'Texeniq', 'Voxjaberd', 'Zar'] },
                { id: 6, name: 'Lori', active: false, regions: ['Vanadzor', 'Alaverdi', 'Dsex', 'Spitak', 'Stepanavan', 'Tashir', 'Jrashen', 'Lernapat', 'Margahovit', 'Marc', 'Vahagnadzor'] },
                { id: 7, name: 'Shirak', active: false, regions: ['Gyumri', 'Axuryan', 'Artik', 'Maralik', 'Horom', 'Jrapi', 'Qaraberd', 'Mec Sepasar', 'Musayelyan', 'Poqr Sepasar', 'Shirak', 'Sizavet'] },
                { id: 8, name: 'Syuniq', active: false, regions: ['Goris', 'Kapan', 'Sisian', 'Qajaran', 'Tatev'] },
                { id: 9, name: 'Tavuhs', active: false, regions: ['Berd', 'Dilijan', 'Ijevan', 'Noyemberyan', 'Aygehovit'] },
                { id: 10, name: 'Vayoc Dzor', active: false, regions: ['Jermuk', 'Vayq', 'Exegnadzor', 'Axavnadzor', 'Gomq'] },
                { id: 11, name: 'Arcax', active: false, regions: ['Stepanakert'] },
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