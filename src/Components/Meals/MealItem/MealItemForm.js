import React, {useContext} from "react";
import calsses from './MealItemForm.module.css'
import Input from "../../UI/Input";
import CartContext from "../../../Store/CartContext";

const MealItemForm =(props)=>{
const cartctx = useContext(CartContext)
console.log('reinistalized cartctx', cartctx)

    const addItemToCart =(event)=>{
        //update the catctx.items
        event.preventDefault();
        //cartctx.items.push(props.item)
        const quantity = document.getElementById("amount_"+props.id).value
        cartctx.addItem({...props.item, quantity: quantity})
        console.log('after addItemToCart', cartctx)
    }

    return(
        <form className={calsses.form}>
            <div>
            {console.log('inside render', cartctx.items)}
            <Input 
            label="Amount"
            input={{
                id:"amount_"+props.id,
                type:"number",
                min:"1",
                max:"5",
                step:"1",
                defaultValue: '1'
            }}
            
            />
            </div>
            <div>
            <button onClick={addItemToCart}>+Add</button>
            </div>
        </form>
    );
};

export default MealItemForm