import Searchs from "../../Pages/explore/searchs"
import ForYours from "../Foryours"
import Fundementials from "../fundementials"
import Gundems from "../gundems"
import News from "../news"
import Sports from "../sports"

import Tab from "../tab copy"

export default function ExploreHome(){
    return(        
        <Tab activeTab="1">
                <Tab.Items>
                    <Tab.Item id="1">
                        Sana özel
                    </Tab.Item>
                    <Tab.Item id="2">
                        Gündemdekiler
                    </Tab.Item>
                    <Tab.Item id="3">
                        Haberler
                    </Tab.Item>
                    <Tab.Item id="4">
                        Spor
                    </Tab.Item>
                    <Tab.Item id="5">
                        Eğlence
                    </Tab.Item>
                </Tab.Items>

                <Tab.Content id="1">
                    <ForYours/>
                </Tab.Content>
                <Tab.Content id="2">
                    <Gundems/>
                </Tab.Content>
                <Tab.Content id="3">
                    <News/>
                </Tab.Content>
                <Tab.Content id="4">
                    <Sports/>
                </Tab.Content>
                <Tab.Content id="5">
                    <Fundementials/>
                </Tab.Content>
            </Tab>
            
    )
}