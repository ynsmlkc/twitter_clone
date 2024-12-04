import Explore from "./explore"
import Logo from "./logo"
import Menu from "./menu"
import Notifications from "./notifications"

export default function Sidebar(){
    return(
        <aside className="w-[275px] min-h-screen ">
            <Logo/>
            <Menu/>
            
        </aside>
    )
}