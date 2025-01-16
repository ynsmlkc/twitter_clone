import Sport from "./sport"
import { sports } from "../../utils/const"

export default function Sports(){
    return(
        <div className="grid">
            {sports.map((sport , index) => <Sport item={sport} key={index} />)}
        </div>
    )
}