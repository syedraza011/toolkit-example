import {custom, decrement, increment} from "../reducers/numberReducer";
import {setToggle} from "../reducers/toggleReducer";
import {useDispatch} from "react-redux";

function Admin(){

    const dispatch = useDispatch()
    return(
        <div>
            <button onClick={()=>dispatch(increment())}>Up by 1</button>
            <button onClick={()=>dispatch(decrement())}>Down by 1</button>
            <button onClick={()=>dispatch(custom(3))}>Up by 3</button>
            <button onClick={()=>dispatch(setToggle())}>Toggle</button>
        </div>
    )
}

export default Admin;