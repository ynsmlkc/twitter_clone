import {createBrowserRouter} from "react-router-dom"
import Home from "../Pages/home"
import Notification from "../Pages/notifications"
import Explore from "../Pages/explore"
import NotFound from "../Pages/notfound"
import MainLayout from "../layout/main"
import Profile from "../Pages/profile"
import TempMessages from "../Pages/messages"

import Locations from "../Pages/locations"
import Grok from "../Pages/lists"
import ExploreLayout from "../layout/explore"

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
                path: 'notifications',
                element: <Notification/>
            },
            {
                path: 'messages',
                element: <TempMessages/>
            },
            {
                path: 'grok',
                element: <Grok/>
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
    {
        path: '/explore',
        element: <ExploreLayout/>,
        children: [
            {
                index: true,
                element: <Explore/>
            }
        ]
    }
])

export default routes