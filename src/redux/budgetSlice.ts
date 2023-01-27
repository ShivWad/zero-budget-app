import { createSlice } from "@reduxjs/toolkit";
import { AppState } from './store';
import { HYDRATE } from "next-redux-wrapper";

export interface BudgetState {
    categoryName: {
        allocatedBudget: number | null,
        subCategories: object[] | null
    }
}


const initialState: BudgetState =
{
    categoryName: {
        allocatedBudget: null,
        subCategories: null
    }
}

export const budgetSlice = createSlice({
    name: "wholeBudget",
    initialState,
    reducers: {
        add: (state, action) => {
            return {
                ...state, ...action.payload
            }
        },
    },

    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload,
            };
        }
    }

});


export const { add } = budgetSlice.actions;
export const selectBudgetSlice = (state: AppState) => state.wholeBudget;
export default budgetSlice.reducer;