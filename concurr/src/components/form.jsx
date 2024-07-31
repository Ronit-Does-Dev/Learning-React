import { useId } from "react";
import React, {useState} from 'react';

function CurrencyForm({

    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOption = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,

}) {

    const dropdownValues = ['CUR', 'CUE', 'CUP', 'CUT'];

    // State to hold the selected value
    const [selectedValue, setSelectedValue] = useState('');

    // Handle change event for the dropdown
    const handleChange = (event) => {
    setSelectedValue(event.target.value);
    }

    const amountInputId = useId()

    return(
    <div className="flex w-[100vw] items-center justify-center drop-shadow-2xl">
     <div className="w-[80vw] px-[4em] py-[4em] bg-[#F5FFE1] mt-[8em] max-[950px]:px-[2em] py-[2em]">
        <form className="flex flex-row flex-wrap gap-[26px] items-center justify-center">
        <label className="flex flex-col font-sans text-left text-[20px] grow leading-10">From
        <div className="bg-[#f0f0f0] h-[54px] mt-[25px] max-[950px]:mt-[8px]">
        <input type="number" className="px-[1em] h-[54px] w-[80%]" />
        <select id="dropdown" className="h-[100%] w-[20%]" value={selectedValue} onChange={handleChange}>
            {dropdownValues.map((value, index) => (
                <option key={index} value={value}>
                    {value}
                </option>
            ))}
        </select>
        </div> 
        </label>

        <label className="flex flex-col font-sans text-left text-[20px] grow leading-10">To
        <div className="bg-[#f0f0f0] h-[54px] mt-[25px] max-[950px]:mt-[8px]">
        <input type="number" className="px-[1em] h-[54px] w-[80%]" readOnly />
        <select id="dropdown" className="h-[100%] w-[20%]" value={selectedValue} onChange={handleChange}>
            {dropdownValues.map((value, index) => (
                <option key={index} value={value}>
                    {value}
                </option>
            ))}
        </select>
        </div> 
        </label>

        <label className="flex flex-col font-sans text-left text-[1em] grow leading-10"><p>1 USD -> 83.92 INR</p>
        <button className="font-bebas text-xl py-3 basis-auto bg-[#DDFB65] h-[54px] mt-[25px] max-[950px]:mt-[8px]">CONVERT</button>
        </label>
        </form>
     </div>
    </div>
    )
}

export default CurrencyForm;