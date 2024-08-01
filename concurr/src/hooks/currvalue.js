import { useState, useEffect } from "react";

const useCurrencyValue = (currencyKey) => {
    const [apiData, setApiData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const apiKey = "89443ce5a6527f58b53b4505";
    const apiLink = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currencyKey}`;
    
    useEffect(() => {
        setLoading(true);
        setError(null);
        fetch(apiLink)
        .then((res) => res.json())
        .then((data) => {
            setApiData(data);
            setLoading(false);
        })
        .catch((err) => {
            setError(err);
            setLoading(false);
        });
    }, [currencyKey]);
    
    return { apiData, loading, error };
};

export default useCurrencyValue;
