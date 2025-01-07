import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react"
import { Link } from "react-router-dom"

export default function Footer(){
    return(
        <footer className="mb-4 px-4 flex flex-wrap gap-2">
            <Link to='/' className="text-[#71767b] leading-4 text-[13px] hover:underline">Hizmet Şartları</Link> 
            <Link to='/' className="text-[#71767b] leading-4 text-[13px] hover:underline">Gizlilik Politakası</Link>
            <Link to='/' className="text-[#71767b] leading-4 text-[13px] hover:underline">Çerez Politikası</Link>
            <Link to='/' className="text-[#71767b] leading-4 text-[13px] hover:underline">Imprint</Link>
            <Link to='/' className="text-[#71767b] leading-4 text-[13px] hover:underline">Erişebilirlik</Link>
            <Link to='/' className="text-[#71767b] leading-4 text-[13px] hover:underline">Reklam Bilgisi</Link>
            <div className="w-full flex gap-2">
            <Popover className="relative inline-flex leading-4 ">
                <PopoverButton className="text-[#71767b] outline-none leading-4 text-[13px] hover:underline inline-flex items-center">
                    Daha Fazla
                    <svg viewBox="0 0 24 24" className="h-[1em] px-0.5 ">
                        <path fill="currentColor" d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>        
                    </svg>
                </PopoverButton>
                <PopoverPanel className="w-[190px] max-w-[384px] bg-black shadow-box rounded-xl absolute bottom-0 right-0 grid overdlow-hidden ">
                    <Link to="/" className="px-4 py-3 text-white text-[15px] leading-5 font-bold hover:bg-[#16181c] transition-colors ">
                       Hakkında
                    </Link>
                    <Link to="/" className="px-4 py-3 text-white text-[15px] leading-5 font-bold hover:bg-[#16181c] transition-colors ">
                       X uygulamasını indir
                    </Link>
                    <Link to="/" className="px-4 py-3 text-white text-[15px] leading-5 font-bold hover:bg-[#16181c] transition-colors ">
                       İşletmeler için X
                    </Link>
                    <Link to="/" className="px-4 py-3 text-white text-[15px] leading-5 font-bold hover:bg-[#16181c] transition-colors ">
                        Geliştiriciler
                    </Link>
                </PopoverPanel>
            </Popover>
            </div>
            <p className="text-[#71767b] leading-4 text-[13px]">
                &copy; 2024 X Corp.
            </p>
        </footer>
    )
}