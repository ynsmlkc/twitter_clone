import Button from "../../../../components/button"

export default function Premium(){
    return(
        <section className=" mb-4 rounded-xl border border-[#2f3336] py-3 px-4 flex flex-col gap-2.5 text-[#e7e9ea] ">
          <h6 className="text-xl leading-6 font-extrabold">Premium'a Abone Ol</h6>
          <p className="leading-5 text-[15px] font-bold ">Yeni özellikleri açmak için abone ol ve uygun olman durumunda içerik üreticisi gelir payı kazan.</p>
          <div className="self-start">
            <Button>Abone ol</Button>
          </div>
        </section>
    )
}