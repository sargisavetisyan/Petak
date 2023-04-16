import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    regions: [
        { id: 0, name: 'Yerevan', active: false, communitys: ['Ajapnyak', 'Arabkir', 'Avan', 'Davtashen', 'Erebuni', 'Kanaqer-Zetun', 'Kentron', 'Malatia-Sebastia', 'Nork-Marash', 'Nor-Nork', 'Nubarashen', 'Shengavit'] },
        { id: 1, name: 'Aragacotn', active: false, communitys: ['Agarak', 'Aparan', 'Aragac', 'Aragacavan', 'Aragacotn', 'Ashtarak', 'Byurakan', 'Karbi', 'Kosh', 'Ohanavan', 'Oshakan', 'Parpi', 'Talin', 'Ujan', 'Voskevaz', 'Mastara', 'Muxni', 'Ushi'] },
        { id: 2, name: 'Ararat', active: false, communitys: ['Artashat', 'Ararat', 'Ayntap', 'Azatashen', 'Dashtavan', 'Gexanist', 'Getapnya', 'Xukasavan', 'Hayanist', 'Hovtashat', 'Xachpar', 'Marmarashen', 'Masis', 'Mxchyan', 'Nor Xarberd', 'Taperakan', 'Vedi', 'Vosketap'] },
        { id: 3, name: 'Armavir', active: false, communitys: ['Armavir', 'Ejmiacin', 'Argavand', 'Baxramyan', 'Merdzavan', 'Mecamor', 'Musaler', 'Paraqar', 'Tairov', 'Axavnatun', 'Aknashen', 'Araqs', 'Arevashat', 'Arshaluys', 'Gay', 'Gribaedov', 'Janfida', 'Jrarbi', 'Lernamerdz', 'Lusagyux', 'Mrgashat', 'Sardarapat'] },
        { id: 4, name: 'Gexarquniq', active: false, communitys: ['Chambarak', 'Gavar', 'Martuni', 'Sevan', 'Vardenis', 'Akunq', 'Artanish', 'Gexarquniq', 'Lchap', 'Madina', 'Shoxakat', 'Sotq', 'Vardadzor', 'Eranos'] },
        { id: 5, name: 'Kotayq', active: false, communitys: ['Abovyan', 'Axveran', 'Akunq', 'Aramus', 'A8gel', 'Arinj', 'Arzakan', 'Arzni', 'Balahovit', 'Byurexavan', 'Charencavan', 'DzorAxbyur', 'Garni', 'Goxt', 'Hrazdan', 'Jrvej', 'Qanaqeravan', 'Qasax', 'Mayakovski', 'Nor Gexi', 'Nor Gyux', 'Nor Hachn', 'Proshyan', 'Ptxni', 'Swlak', 'Caxkadzor', 'Verin Ptxni', 'Exvard', 'Zovuni', 'Artavazd', 'Gexadir', 'Gexashen', 'Hanqavan', 'Hatis', 'Hacavan', 'Jraber', 'Qaxsi', 'Sevaber', 'Texeniq', 'Voxjaberd', 'Zar'] },
        { id: 6, name: 'Lori', active: false, communitys: ['Vanadzor', 'Alaverdi', 'Dsex', 'Spitak', 'Stepanavan', 'Tashir', 'Jrashen', 'Lernapat', 'Margahovit', 'Marc', 'Vahagnadzor'] },
        { id: 7, name: 'Shirak', active: false, communitys: ['Gyumri', 'Axuryan', 'Artik', 'Maralik', 'Horom', 'Jrapi', 'Qaraberd', 'Mec Sepasar', 'Musayelyan', 'Poqr Sepasar', 'Shirak', 'Sizavet'] },
        { id: 8, name: 'Syuniq', active: false, communitys: ['Goris', 'Kapan', 'Sisian', 'Qajaran', 'Tatev'] },
        { id: 9, name: 'Tavuhs', active: false, communitys: ['Berd', 'Dilijan', 'Ijevan', 'Noyemberyan', 'Aygehovit'] },
        { id: 10, name: 'Vayoc Dzor', active: false, communitys: ['Jermuk', 'Vayq', 'Exegnadzor', 'Axavnadzor', 'Gomq'] },
        { id: 11, name: 'Arcax', active: false, communitys: ['Stepanakert'] },
    ]
}

export const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        isActiveRegion: (state, action) => {
            state.regions.find(region => {
                if (region.id === action.payload) {
                    region.active = !region.active
                }
            })
        }
    }
})

export default locationSlice.reducer

export const { isActiveRegion } = locationSlice.actions