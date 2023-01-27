import { createSlice } from "@reduxjs/toolkit";
import { AppState } from './store';
import { HYDRATE } from "next-redux-wrapper";

export interface BudgetState {

    categoryName: string | null,
    allocatedBudget: number | null,
    subCategories: object[] | null

}


const initialState =
{
    categories: [
        {
            categoryName: null,
            allocatedBudget: null,
            subCategories: null
        }
    ]
}


export const budgetSlice = createSlice({
    name: "wholeBudget",
    initialState,
    reducers: {
        add: (state, action) => {
state

            return { // returning a copy of orignal state 
                ...state, //copying the original state
                todos: [...state.categories, action.payload] //new todos array 
               }
        },

        // modify: (state, action) => {
        //     const index = state[action.payload]
        // }
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