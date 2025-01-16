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
        <div ref={ref} className="flex-1 flex items-center h-[53px]">
            <div className="h-[43px] flex items-center flex-1 relative">
                <div className="w-full relative">
                    <input 
                        type="text"
                        placeholder="Ara"
                        className="w-full h-[43px] rounded-full pl-14 pr-4 bg-[#202327] outline-none focus:bg-black focus:border focus:border-[#1d9bf0]"
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
                <div className="px-4">
                    <button className="w-[36px] h-[36px] rounded-full flex items-center justify-center hover:bg-[#1d1f23] transition-colors">
                        <svg viewBox="0 0 24 24" className="h-5 min-w-[20px] text-[#71767b]">
                            <path 
                                fill="currentColor" 
                                d="M10.54 1.75h2.92l1.57 2.36c.11.17.32.25.53.21l2.53-.59 2.17 2.17-.58 2.54c-.05.2.04.41.21.53l2.36 1.57v2.92l-2.36 1.57c-.17.12-.26.33-.21.53l.58 2.54-2.17 2.17-2.53-.59c-.21-.04-.42.04-.53.21l-1.57 2.36h-2.92l-1.58-2.36c-.11-.17-.32-.25-.52-.21l-2.54.59-2.17-2.17.58-2.54c.05-.2-.03-.41-.21-.53l-2.35-1.57v-2.92L4.1 8.97c.18-.12.26-.33.21-.53L3.73 5.9 5.9 3.73l2.54.59c.2.04.41-.04.52-.21l1.58-2.36zm1.07 2l-.98 1.47C10.05 6.08 9 6.5 7.99 6.27l-1.46-.34-.6.6.33 1.46c.24 1.01-.18 2.07-1.05 2.64l-1.47.98v.78l1.47.98c.87.57 1.29 1.63 1.05 2.64l-.33 1.46.6.6 1.46-.34c1.01-.23 2.06.19 2.64 1.05l.98 1.47h.78l.97-1.47c.58-.86 1.63-1.28 2.65-1.05l1.45.34.61-.6-.34-1.46c-.23-1.01.18-2.07 1.05-2.64l1.47-.98v-.78l-1.47-.98c-.87-.57-1.28-1.63-1.05-2.64l.34-1.46-.61-.6-1.45.34c-1.02.23-2.07-.19-2.65-1.05l-.97-1.47h-.78zM12 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5c.82 0 1.5-.67 1.5-1.5s-.68-1.5-1.5-1.5zM8.5 12c0-1.93 1.56-3.5 3.5-3.5 1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5c-1.94 0-3.5-1.57-3.5-3.5z"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}