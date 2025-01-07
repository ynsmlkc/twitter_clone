import Explore from "./explore"
import Logo from "./logo"
import Menu from "./menu"
import Notifications from "./notifications"
import Account from "./account"

export default function Sidebar(){
    return(
        <aside className="w-[275px] max-h-screen min-h-screen flex flex-col sticky z-[2] top-0">
            <Logo/>
            <Menu/>
            <Account />
        </aside>
    )
}