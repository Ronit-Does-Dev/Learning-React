function CurrencyForm(){
    return(
    <div className="flex w-[100vw] items-center justify-center">
     <div className="w-[80vw] px-[4em] py-[4em] bg-[#F5FFE1] mt-[8em]">
        <form className="flex flex-row flex-wrap gap-[26px] items-center justify-center">
        <label className="flex flex-col font-sans text-left text-[20px] grow leading-10">From
        <input type="number" className="bg-[#F0F4E5] h-[54px]" />
        </label>

        <label className="flex flex-col font-sans text-left text-[20px] grow leading-10">To
        <input type="number" className="bg-[#F0F4E5] h-[54px]" />
        </label>

        <label className="flex flex-col font-sans text-left text-[12px] grow leading-10">1 USD -> 83.92 INR
        <button className="font-bebas text-xl py-3 basis-auto bg-[#DDFB65] h-[54px]">CONVERT</button>
        </label>
        </form>
     </div>
    </div>
    )
}

export default CurrencyForm;