import {createBrowserRouter} from "react-router-dom"
import Home from "../Pages/home"
import Notification from "../Pages/notifications"
import Explore from "../Pages/explore"
import NotFound from "../Pages/notfound"
import MainLayout from "../layout/main"
import Profile from "../Pages/profile"
import TempMessages from "../Pages/Messages"
import Lists from "../Pages/lists"
import Locations from "../Pages/locations"
const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: 'explore',
                element: <Explore/>
            },
            {
                path: 'notifications',
                element: <Notification/>
            },
            {
                path: 'messages',
                element: <TempMessages/>
            },
            {
                path: 'lists',
                element: <Lists/>
            },
            {
                path: 'locations',
                element: <Locations/>
            },
            { 
                path: ':slug',
                element: <Profile/>

            },
            {
                path: '*',
                element: <NotFound/>
            }
        ]
    },
    
])

export default routes