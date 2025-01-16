import PropTypes from "prop-types"
import Content from "./content"
import Item from "./item"
import Items from "./items"
import { TabContext } from "./context"
import { useEffect, useState, Children } from "react"

export default function Tab({ children, activeTab }) {
    const [active, setActive] = useState(activeTab)

    useEffect(() => {
        setActive(activeTab)
    }, [activeTab])

    const contents = Children.toArray(children).filter(c => c.type === Content)
    const items = Children.toArray(children).filter(c => c.type === Items)

    const content = contents.find(c => c.props.id === active)

    const data = {
        active,
        setActive
    }

    return (
        <TabContext.Provider value={data}>
            <div className="border-b border-[#2f3336] sticky top-[53px] z-10 bg-black/[.65] backdrop-blur-md">
                {items}
            </div>
            {content}
        </TabContext.Provider>
    )
}

Tab.Items = Items
Tab.Item = Item
Tab.Content = Content
Tab.propTypes = {
    children: PropTypes.arrayOf(
        PropTypes.node
    ),
    activeTab: PropTypes.string.isRequired
}