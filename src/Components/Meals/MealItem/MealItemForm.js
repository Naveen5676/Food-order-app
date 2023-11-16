import React from "react";
import calsses from './MealItemForm.module.css'
import Input from "../../UI/Input";

const MealItemForm =()=>{
    return(
        <form className={calsses.form}>
            <div>
            <Input 
            label="Amount"
            input={{
                id:"amount",
                type:"number",
                min:"1",
                max:"5",
                step:"1",
                defaultValue: '1'
            }}
            
            />
            </div>
            <div>
            <button>+Add</button>
            </div>
        </form>
    );
};

export default MealItemForm