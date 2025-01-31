import { useRef, useState } from "react"
import { useClickAway } from "react-use"

export default function Search() {
    const [query, setQuery] = useState('')
    const [focus, setFocus] = useState(false)
    const ref = useRef()
    useClickAway(ref, () => {
        setFocus(false)
    })

    return (
        <div ref={ref} className="min-h-[2rem] h-[3.313rem] mb-3 flex items-center sticky top-0 border border-[#71767b] rounded-full ">
            <div className="h-[3.313rem] flex items-center flex-1 relative">
                <div className="w-full relative">
                    <input 
                        type="text"
                        placeholder="Ara"
                        className="w-full h-[43px] rounded-full pl-14 pr-4 bg-black outline-none focus:bg-black focus:border focus:border-[#1d9bf0] focus:outline-none"
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        onFocus={() => setFocus(true)}
                    />
                    <div className="absolute top-0 left-0 h-full flex items-center justify-center w-[50px] pointer-events-none">
                        <svg viewBox="0 0 24 24" className="h-5 min-w-[20px] text-[#71767b]">
                            <path 
                                fill="currentColor" 
                                d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"
                            />
                        </svg>
                    </div>
                </div>
                
            </div>
        </div>
    )
}