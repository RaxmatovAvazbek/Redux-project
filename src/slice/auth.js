import { createSlice } from '@reduxjs/toolkit'
import { createRoot } from 'react-dom/client'

const initialState = {
    isLoading : false,
    isloggedIn : false,
    user: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginUserStart: state => {
            state.isLoading = true
        },
        loginUserSucces: state => {},
        loginUserFailuer: state => {},
    }
})

export const {loginUserStart} = authSlice.actions
export default authSlice.reducer