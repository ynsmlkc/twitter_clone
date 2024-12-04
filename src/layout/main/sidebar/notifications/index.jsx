import { NavLink } from "react-router-dom"
import classNames from "classnames"

export default function Notifications(){
    return(
        <nav className="mt-0.5 mb-1">
        <NavLink to="/notifications" className="py-1 block group">
          {({isActive}) => (
             <div className={classNames('p-3 rounded-full transition-colors inline-flex items-center gap-5 group-hover:bg-[#eff3f41a]', {"font-bold": isActive})}>
             {!isActive && (
              <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block">
                
                <path fill="#fff" d="M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l.847-6.698C6.364 6.272 8.941 4 11.996 4s5.627 2.268 6.013 5.295L18.864 16H5.134z">

                </path>
                
              </svg>
             )}
            {isActive && (
             <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block">
              
              <path fill="#fff" d="M11.996 2c-4.062 0-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958C19.48 5.017 16.054 2 11.996 2zM9.171 18h5.658c-.412 1.165-1.523 2-2.829 2s-2.417-.835-2.829-2z">

              </path>
         
             </svg>
            )}
             <div className="pr-4 text-xl">
               Bildirimler
             </div>
            </div>
          )}
        </NavLink>
    </nav>
    )
}