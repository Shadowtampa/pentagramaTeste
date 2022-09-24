import { createSlice } from '@reduxjs/toolkit'

export interface ICity {
  id: number,
  name: string,
  state: string,
  foundation: Date,
}
export interface CityState {
  cities: ICity[]
}

const initialState: CityState = {
  cities: [
    {
      id: 1,
      name: "Santarém",
      state: "Pará",
      foundation: new Date(1785, 3, 10) // the month is 0-indexed
    },
    {
      id: 2,
      name: "Rio de Janeiro",
      state: "Rio de Janeiro",
      foundation: new Date(1990, 0, 23) // the month is 0-indexed
    },
    {
      id: 3,
      name: "São Paulo",
      state: "São Paulo",
      foundation: new Date(1910, 5, 13) // the month is 0-indexed
    }
  ]
}

export const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
  },
})

// Action creators are generated for each case reducer function
export const { } = citySlice.actions

export default citySlice.reducer