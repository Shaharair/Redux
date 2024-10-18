import React from 'react'
import {useDispatch} from "react-redux"
import { decrement, increment } from '../Slice/ReduxSlice'
import {useSelector} from "react-redux"

const Header = () => {

    let data = useSelector((state) => state.counter.value)
    

    let dispatch = useDispatch()

    let handleIncrement = () =>{
        dispatch(increment())

    }

    let handleDecrement = () => {
        dispatch(decrement())
        
    }


    return (
        <>

            <div className="">
                <button onClick={handleIncrement}>+</button>
                <div className="">
                    {data}
                </div>
                <button onClick={handleDecrement}>-</button>
            </div>

        </>
    )
}

export default Header