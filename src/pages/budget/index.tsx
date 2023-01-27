import MoneyCard from '@/components/MoneyCard'
import { add, selectBudgetSlice } from '@/redux/budgetSlice'
import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
const Budget = () => {

    const budgetSlice = useSelector(selectBudgetSlice);
    const dispatcher = useDispatch();

    const testDF = () => {

        // console.log(budgetSlice);

        dispatcher(add({
            categoryName: "tesftCat",
            allocatedBudget: 3123,
            subCategories: [{ subCategoryName: "test", subCategoryExp: 39 },
            { subCategoryName: "111133t", subCategoryExp: 239 }]
        }))
    

        console.log(">>>", budgetSlice)
    
    }



    let test = [
        {
            category: "Grocery",
            allocatedBudget: 500
        },
        {
            category: "Electricity",
            allocatedBudget: 200
        },
        {
            category: "Maintainance",
            allocatedBudget: 100
        },
        {
            category: "Grocery",
            allocatedBudget: 500
        },
        {
            category: "Electricity",
            allocatedBudget: 200
        },
        {
            category: "Maintainance",
            allocatedBudget: 100
        },
        {
            category: "Grocery",
            allocatedBudget: 500
        },
        {
            category: "Electricity",
            allocatedBudget: 200
        },
        {
            category: "Maintainance",
            allocatedBudget: 100
        },
    ]
    return (
        <div className='money-card-container'>
            <button onClick={testDF}>
                TEST
            </button>
            {/* {test.map((expense) => {
                return (
                    <MoneyCard category={expense.category} allocatedBudget={expense.allocatedBudget} />
                )
            })} */}
        </div>
    )
}

export default Budget