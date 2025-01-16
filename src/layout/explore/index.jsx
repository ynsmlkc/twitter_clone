import WhoFollow from '../main/rightbar/who-follow'

export default function ExploreLayout({ children }) {
    return (
        <div className="w-[1265px] mx-auto flex">
            <main className="flex-1 border-x border-[#2f3336]">
                {children}
            </main>
            <aside className="w-[350px] mr-2.5">
                <div className="flex flex-col gap-3 sticky top-0 px-6">
                    <WhoFollow />
                </div>
            </aside>
        </div>
    )
} 