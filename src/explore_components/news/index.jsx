import New from "./new"
import { news } from "../../utils/const"

export default function News(){
    return(
        <div className="grid">
            {news.map((you , index) => <New item={you} key={index} />)}
        </div>
    )
}