import { Popover, PopoverButton, PopoverPanel, Transition } from "@headlessui/react"
import { useAccount } from "../../../../store/auth/hooks"
import More from "./more"

export default function Account() {
    
    const account = useAccount()
    
    
    return(
        <div className="mt-auto">
            <Popover className={"relative"}>
                <PopoverButton className={"my-3 p-3 rounded-full hover:bg-[#eff3f41a] w-full flex text-left items-center transition-colors outline-none "}>
                    <img src={account.avatar} className="w-10 h-10 rounded-full" alt=""/>
                    <div className="mx-3 text-[15px]">
                        <h6 className="font-bold leading-[20px]">{account.fullName}</h6>
                        <div className="text-[#71767b]">
                          @{account.username}
                        </div>
                    </div>    
                </PopoverButton>
                <PopoverPanel  transition
                className="flex origin-top flex-col transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0 absolute bottom-full py-3 w-[300px] overflow-hidden left-1/2 -translate-x-1/2 bg-black rounded-2xl z-50">
                    <More/> 
                </PopoverPanel>       
            </Popover>
        </div>
        
    )
}