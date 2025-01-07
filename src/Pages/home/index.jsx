import StickyHeader from "../../components/sticky-header"
import Tab from "../../components/tab"
import MainLayout from "../../layout/main"
import ForYou from "./for-you"

export default function Home(){
    return(
        <>
            <StickyHeader title='Ana Sayfa'/>
            <Tab activeTab="for-you">
                <Tab.Items>
                    <Tab.Item id="for-you">
                        Sana özel
                    </Tab.Item>
                    <Tab.Item id="followings">
                        Takip edilenler
                    </Tab.Item>
                </Tab.Items>
                <Tab.Content id="for-you"t>
                    <ForYou/>
                </Tab.Content>
                <Tab.Content id="followings">
                    2.content
                </Tab.Content>
            </Tab>

            
        </>
    )
}