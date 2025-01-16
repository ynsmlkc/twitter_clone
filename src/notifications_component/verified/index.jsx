import { Link } from "react-router-dom";

export default function Verified(){
    return(
        <div className="flex flex-col items-center justify-center p-[60px] px-[130px] min-h-[250px] ">
            <img 
              alt="" draggable="true" src="https://abs.twimg.com/responsive-web/client-web/verification-check-800x400.v1.52677a99.png" class="css-9pa8cd">
            </img>
            <div className="text-[#e7e9ea] text-[31px] font-extrabold ">
                Burada görecek bir şey yok. Henüz...
            </div>        
             <div className=" text-[#71767b] ">
               Onaylanmış bir hesaptan gelen beğeniler, bahsetmeler, yeniden gönderiler ve daha birçok şeyi burada bulabilirsin.
               <Link to="/" className="text-[#e7e9ea] underline font-extrabold ">
                 Daha fazla bilgi al
               </Link>
            </div>
        </div>
        
    )
}