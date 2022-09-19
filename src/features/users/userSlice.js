import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id : '0', name: 'Batman'}, 
    {id : '1', name: 'Spiderman'},
    {id : '2', name: 'Shaktiman'},
]

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers : {}
})

export const selectAllUsers = (state) => state.users

export default userSlice.reducer