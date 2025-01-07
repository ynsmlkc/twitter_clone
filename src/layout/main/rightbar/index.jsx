import Premium from "./premium";
import Topics from "./topics";
import Search from "./search";
import WhoFollow from "./who-follow";
import Footer from "./footer";
import StickyBox from "react-sticky-box";

export default function RightBar() {
   return(
    <StickyBox className="self-start" offsetBottom={80}>
        <aside className="w-[350px] mr-2.5">
         <Search/>
         <Premium/>
         <Topics/>
         <WhoFollow/>
         <Footer/>
        </aside>
    </StickyBox>
   )
}