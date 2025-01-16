import All from "../all"
import Bahsedilenler from "../bahsedilenler"
import Tab from "../tab copy"
import Verified from "../verified"

export default function NotificationHome(){
    return(        
        <Tab activeTab="1">
                <Tab.Items>
                    <Tab.Item id="1">
                        Tümü
                    </Tab.Item>
                    <Tab.Item id="2">
                        Onaylanmış
                    </Tab.Item>
                    <Tab.Item id="3">
                        Bahsedenler
                    </Tab.Item>
                </Tab.Items>

                <Tab.Content id="1">
                    <All/>
                </Tab.Content>
                <Tab.Content id="2">
                    <Verified/>
                </Tab.Content>
                <Tab.Content id="3">
                    <Bahsedilenler/>
                </Tab.Content>
            </Tab>
            
    )
}