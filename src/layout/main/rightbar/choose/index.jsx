export default function Choose() {
    return (
        <div className="  relative ">
            <div className="max-w-[400px] ">
                <h1 className="text-[30px] font-bold mb-2 text-[#e7e9ea] absolute top-[400px]">Mesaj seç</h1>
                <p className="text-[#71767b] leading-5 text-[15px] absolute top-[450px]">
                    Mevcut sohbetlerin arasından seçim yap, yeni bir sohbet başlat veya sörfe devam et.
                </p>
                <button className="absolute top-[515px] bg-[#1d9bf0] text-[#e7e9ea] rounded-full px-[35px] py-[15px]  text-[15px] font-bold hover:bg-[#1a8cd8] transition-colors">
                    Yeni mesaj
                </button>
            </div>
        </div>
    )
}