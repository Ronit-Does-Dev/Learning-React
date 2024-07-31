import { useState, useEffect } from "react";

const useCurrencyValue = (currencyKey) => {
    const [apiData, setApiData] = useState(0);
    const apiLink = `https://v6.exchangerate-api.com/v6/89443ce5a6527f58b53b4505/latest/#{currencyKey}`;
    
    useEffect(() => {
        fetch(apiLink)
        .then((res) => {
            res.json();
        })
        .then((res) => {
            setApiData(res)
        })
    },[currencyKey]);
    console.log(apiData);
    
    return(
        apiData
    )

}

export default useCurrencyValue;