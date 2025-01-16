import { foryours } from "../../utils/const";
import ForYou from "./Foryou";

export default function ForYours(){
    return(
        <div className="grid">
            {foryours.map((foryou, index) => <ForYou item={foryou} key={index} />)}
        </div>
    )
}