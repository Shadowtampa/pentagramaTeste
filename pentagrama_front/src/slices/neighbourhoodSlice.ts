import { createSlice } from '@reduxjs/toolkit'

export interface INeighbour {
  id: number,
  name: string,
  city_id: number,
}
export interface NeighbourhoodState {
  neighbourhoods: INeighbour[]
}

const initialState: NeighbourhoodState = {
  neighbourhoods: [
    {
      id: 1,
      name: "Jardim Santarém",
      city_id: 1,
    },{
      id: 2,
      name: "Favela da Rocinha",
      city_id: 2,
    },{
      id: 3,
      name: "Diamantino",
      city_id: 1,
    },
  ],
}

export const neighbourhoodSlice = createSlice({
  name: 'neighbourhood',
  initialState,
  reducers: {
  },
})

// Action creators are generated for each case reducer function
export const { } = neighbourhoodSlice.actions

export default neighbourhoodSlice.reducer