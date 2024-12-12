import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentAccount: {
        id: 1,
        username: 'yunuscom',
        fullName: './YunusMalkoç',
        avatar: 'https://pbs.twimg.com/profile_images/1539619705454993411/WWkj89QP_400x400.png'
    },
    accounts: [
        {
            id: 1,
            username: 'yunuscom',
            fullName: './YunusMalkoç',
            avatar: 'https://pbs.twimg.com/profile_images/1539619705454993411/WWkj89QP_400x400.png'
        },
        {
            id: 2,
            username: 'Efecom',
            fullName: './Efebulduk',
            avatar: 'https://pbs.twimg.com/profile_images/1592265194696212486/G4CSsK7g_400x400.jpg'
        },
    ]
}

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        //State manipüle etme metodları
        _addAccount: (state, action) => {
            state.accounts.push(action.payload)
        },
        _removeAccount: (state, action) => {
            state.accounts = state.accounts.filter(account => account.id !== action.payload)
            if (state.currentAccount && action.payload === state.currentAccount.id ) {
                this._setCurrentAccount(false)
            }
        },
        _setCurrentAccount: (state, action) => {
            state.currentAccount = action.payload
        }
    }
})

export const {_addAccount, _removeAccount, _setCurrentAccount} = auth.actions
export default auth.reducer