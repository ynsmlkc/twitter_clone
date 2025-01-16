export default function Photo( {photos} ){
    if (!photos || photos.length === 0) {
        // Eğer photos tanımsız veya boşsa, hiçbir şey render etme
        return null;
    }

    switch (photos.length){
        case  1:
            return(
                <div className="mt-3">
                    <img src={photos[0]} alt="" className="max-h-[510px] object-cover rounded-2xl"/>
                </div>
            )
        case 2:
          return(
             <div className="mt-3 grid grid-cols-2 gap-0.5 h-[288px]">
                 <img src={photos[0]} alt="" className="h-[288px] w-full object-cover rounded-2xl"/>
                 <img src={photos[1]} alt="" className="h-[288px] w-full object-cover rounded-2xl"/>
             </div>
          )
           
        case 3:
            return(
               <div className="mt-3 grid grid-cols-2 gap-0.5 h-[288px] rounded-2xl">
                   <img src={photos[0]} alt="" className="h-full w-full object-cover rounded-2xl"/>
                   <div className="h-full flex flex-col gap-0.5">
                      <div className="flex-shrink-0 flex-1 relative">
                        <img src={photos[1]} alt="" className="h-full absolute inset-0 flex-shrink-0 w-full object-cover"/>
                      </div>
                      <div className="flex-shrink-0 flex-1 relative">
                        <img src={photos[2]} alt="" className="h-full absolute inset-0 flex-shrink-0 w-full object-cover"/>
                      </div>  
                   </div>
               </div>
            )
             

        case 4:
            return(
                <div className="mt-3 grid grid-cols-2 gap-0.5 h-[286px] rounded-2xl ">
                    <img src={photos[0]} alt="" className="h-[143px] w-full object-cover rounded-2xl"/>
                    <img src={photos[2]} alt="" className="h-[143px] w-full object-cover rounded-2xl"/>
                    <img src={photos[1]} alt="" className="h-[143px] w-full object-cover rounded-2xl"/>
                    <img src={photos[3]} alt="" className="h-[143px] w-full object-cover rounded-2xl"/>
                </div>
            )
        
    }

}