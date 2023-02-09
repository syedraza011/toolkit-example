import {useParams} from "react-router-dom";

function Students(){
    const params = useParams()

    const students=["jake", "roch", "erik"];

    return(
        <div>
            <h1>{students[params.id-1]}</h1>
        </div>
    )
}

export default Students;