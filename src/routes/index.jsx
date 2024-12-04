import {createBrowserRouter} from "react-router-dom"
import Home from "../Pages/home"
import Notification from "../Pages/notifications"
import Explore from "../Pages/explore"
import NotFound from "../Pages/notfound"
import MainLayout from "../layout/main"
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
                path: '*',
                element: <NotFound/>
            }
        ]
    },
    
])

export default routes