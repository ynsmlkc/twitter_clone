export default function Main(){
    return(
        <div className="relative  ">
           <div className="text-[#e7e9ea] font-extrabold text-[31px] my-2 absolute max-w-[324px] max-h-[72px] left-[50px] top-[70px]  ">
              Gelen kutuna hoş geldin!
           </div>
           <div className="absolute max-w-[324px] max-h-[72px] text-[#71767b] text-[15px] left-[50px] top-[180px] ">
            Özel sohbetler sayesinde X platformundaki diğer kişilere düşüncelerini yaz, gönderi ve daha fazla içerik paylaş. 
           </div>
           <button className="absolute left-[50px] top-[270px] bg-[#1d9bf0] rounded-full text-[15px] font-bold pl-8 pr-8 h-[52px] ">
             Mesaj yaz
           </button>
        </div>
    )
}