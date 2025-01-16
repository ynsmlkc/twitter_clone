import { useLocation } from 'react-router-dom'
import Search from './search'
import Premium from './premium'
import Topics from './topics'
import WhoFollow from './who-follow'
import Footer from './footer'

export default function RightBar() {
    const location = useLocation()
    const isExplorePage = location.pathname === '/explore'

    return (
        <aside className="w-[350px] mr-2.5">
            <div className="flex flex-col gap-3 sticky top-0 px-6">
                {!isExplorePage && (
                    <>
                        <Search />
                        <Premium />
                        <Topics />
                    </>
                )}
                <WhoFollow />
                {!isExplorePage && <Footer />}
            </div>
        </aside>
    )
}