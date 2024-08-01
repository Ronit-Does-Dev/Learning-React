import {useState} from 'react';
import useCurrencyValue from "../hooks/currvalue";

function CurrencyForm() {
    
    let [fromAmount, setFromAmount] = useState(0);
    let [toAmount, setToAmount] = useState(0);
    let [fromCur, setFromCur] = useState("usd");
    let [toCur, setToCur] = useState("inr");

    const { apiData, loading, error } = useCurrencyValue(fromCur);
    
    if (loading) {
        return (
            <div className="flex w-[100vw] items-center justify-center drop-shadow-2xl">
            <div className="w-[80vw] px-[4em] py-[4em] bg-[#F5FFE1] mt-[8em] max-[950px]:px-[3em] max-[950px]:py-[3em]">
                <div>Loading...</div>
            </div>
            </div>
                
        )
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    let unitConversionValue = apiData.conversion_rates ? apiData.conversion_rates[toCur] : 1;
    let unitValue = `1 ${fromCur.toUpperCase()} -> ${unitConversionValue} ${toCur.toUpperCase()}`;
    
    let currency = apiData.conversion_rates ? Object.keys(apiData.conversion_rates) : [];
    let dropdownValues = currency;


    // Handle change event for the dropdown
    
    const UpdateFromAmount = (event) => {
        setFromAmount(Number(event.target.value))
    }
    
    const UpdateFromCur = (event) => {
    setFromCur(event.target.value);
    }

    const UpdateToCur = (event) => {
        setToCur(event.target.value)
    }

  

    const convert = () => {

        setToAmount(fromAmount * apiData.conversion_rates[toCur])

    }

    return(
    <div className="flex w-[100vw] items-center justify-center drop-shadow-2xl">
     <div className="w-[80vw] px-[4em] py-[4em] bg-[#F5FFE1] mt-[8em] max-[950px]:px-[3em] max-[950px]:py-[3em]">
        <form className="flex flex-row flex-wrap gap-[26px] items-center justify-center" onSubmit={(e) => { e.preventDefault(); convert(); }}>
        <label className="flex flex-col font-sans text-left text-[20px] grow leading-10">From
        <div className="bg-[#f0f0f0] h-[54px] mt-[25px] max-[950px]:mt-[8px]">
        <input type="number" className="px-[1em] h-[54px] w-[80%]" value={fromAmount} onChange={UpdateFromAmount} />
        <select id="dropdown" className="h-[100%] w-[20%]" value={fromCur} onChange={UpdateFromCur}>
            {dropdownValues.map((value, index) => (
                <option key={index} value={value}>
                    {value}
                </option>
            ))}
        </select>
        </div> 
        </label>

        <label className="flex flex-col font-sans text-left text-[20px] grow leading-10">
            To
            <div className="bg-[#f0f0f0] h-[54px] mt-[25px] max-[950px]:mt-[8px]">
            <input type="number" className="px-[1em] h-[54px] w-[80%]" value={toAmount} readOnly />
             <select className="h-[100%] w-[20%]" value={toCur} onChange={UpdateToCur}>
                 {dropdownValues.map((value, index) => (
                     <option key={index} value={value}>
                         {value}
                    </option>
            ))}
              </select>
             </div>
        </label>


        <label className="flex flex-col font-sans text-left text-[1em] grow leading-10">{unitValue}
        <button className="font-bebas text-xl py-3 basis-auto bg-[#DDFB65] h-[54px] mt-[25px] max-[950px]:mt-[8px]" onClick={convert}>CONVERT</button>
        </label>
        </form>
     </div>
    </div>
    )
}

export default CurrencyForm;