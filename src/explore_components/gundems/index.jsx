import { gundems } from "../../utils/const";
import Gundem from "./gundem";

export default function Gundems(){
    return(
        <div className="grid">
            {gundems.map((gundem, index) => <Gundem item={gundem} key={index} />)}
        </div>
    )
}