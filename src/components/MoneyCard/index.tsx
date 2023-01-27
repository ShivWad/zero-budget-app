import React, { useState } from 'react'
import { TextField, Typography, Dialog, DialogActions, DialogContent, Button, LinearProgress } from '@mui/material'

const dynamicBarClasses = {
    dynamic_bar_0_25: "dynamic-bar-0-25",
    dynamic_bar_25_50: "dynamic-bar-25-50",
    dynamic_bar_50_75: "dynamic-bar-50-75",
    dynamic_bar_75_100: "dynamic-bar-75-100",
    dynamic_bar_over: "dynamic-bar-over"
}
const MoneyCard = (props: { category: string, allocatedBudget: number }) => {

    const { category, allocatedBudget } = props;

    const [value, setValue] = useState(0);
    const [expense, setExpense] = useState(0);
    const [open, setOpen] = useState(false);
    
    const handleInputChange = (e: Event) => {
        let val = parseInt(e.target.value);
        setValue(val);
    }

    let progressPercentage = 100 / (allocatedBudget / expense);

    const addExpense = () => {
        setExpense(value);
        setOpen(false);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const style: React.CSSProperties = {
        backgroundColor: "red",
    }

    return (
        <>
            <div className="money-card">
                <div className='top-container'>
                    <Typography variant="h4" >
                        {category}
                    </Typography>
                    <div className='expenses'>
                        <Typography variant='h4'>
                            {expense}/<b>{allocatedBudget}</b>
                        </Typography>
                    </div>
                </div>
                <div className="bottom-container">

                    <LinearProgress
                        classes={{
                            bar: progressPercentage <= 25 ? dynamicBarClasses.dynamic_bar_0_25 :
                                progressPercentage > 25 && progressPercentage <= 50 ? dynamicBarClasses.dynamic_bar_25_50 :
                                    progressPercentage > 50 && progressPercentage <= 75 ? dynamicBarClasses.dynamic_bar_50_75 :
                                        progressPercentage > 75 && progressPercentage <= 100 ? dynamicBarClasses.dynamic_bar_75_100 :
                                            progressPercentage > 100 ? dynamicBarClasses.dynamic_bar_over : undefined
                        }}
                        style={expense > allocatedBudget ? style : undefined}
                        className='expense-progress'
                        variant="determinate"
                        value={progressPercentage} />
                    {/* <Slider className="expense-slider" min={0} max={100} value={expense} /> */}
                    <div className='bottom-container-actions'>
                        <Button className="add-expense-button" variant='contained' onClick={() => setOpen(true)}>
                            <Typography variant='body2'>
                                Add Expenses
                            </Typography>
                        </Button>
                        <Button className="add-expense-button" variant='outlined' >
                            <Typography variant='body2'>
                                View Expenses
                            </Typography>
                        </Button>
                    </div>
                </div>

                <Dialog className="add-expense-dialog" open={open} onClose={handleClose}>
                    <DialogContent>
                        <TextField fullWidth onChange={(e) => handleInputChange(e)} type={'number'} />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={addExpense} variant='contained' color={'secondary'}>
                            <Typography>
                                Add
                            </Typography>
                        </Button>
                        <Button onClick={handleClose} variant='contained' color={'secondary'}>
                            <Typography>
                                Cancel
                            </Typography>
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </>
    )
}

export default MoneyCard