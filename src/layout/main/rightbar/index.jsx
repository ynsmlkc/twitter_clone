import { useLocation } from 'react-router-dom'
import Search from './search'
import Premium from './premium'
import Topics from './topics'
import WhoFollow from './who-follow'
import Footer from './footer'
import StickyBox from 'react-sticky-box'
import Choose from './choose'

export default function RightBar() {
    const location = useLocation() 
    const Np = location.pathname === '/notifications'
    const Home = location.pathname === '/'
    const Explore = location.pathname === '/explore'
    const Messages = location.pathname === '/messages'
    
    
	return (
		<StickyBox className="self-start" offsetBottom={80}>
			<aside className="w-[350px] mr-2.5" >
				<div>            
                  {Np && (
                    <>
                        <Search/>
				        <Topics/>
				        <WhoFollow/>
				        <Footer/>
                    </>
                   )}
                   {Home && (
                    <>
                        <Search/>
                        <Premium/>
				        <Topics/>
				        <WhoFollow/>
				        <Footer/>
                    </>
                   )}  
                   {Explore && (
                    <>
				        <WhoFollow/>
				        <Footer/>
                    </>
                   )} 
                   
                   {Messages && (
                    <>
                        <Choose/>
                    </>
                   )}
                   
                </div>
			</aside>
		</StickyBox>
	)
}