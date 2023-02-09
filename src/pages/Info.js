import {useSelector} from "react-redux";

function Info(){
    const number = useSelector(state=>state.number.value);
    const toggle = useSelector(state=>state.toggle.value);
    return(
        <div>
            <h1>{number}</h1>
            <h1>{toggle?"True":"False"}</h1>
        </div>
    )
}

export default Info;