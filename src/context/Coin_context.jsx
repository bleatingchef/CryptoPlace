import { createContext, useEffect, useState } from "react";

export const Coin_context=createContext();

const Coin_context_Provider=(props)=>{
    const [allCoin, setAllCoin]= useState([])
    const [currency, setCurrency]= useState({
        name:"usd",
        Symbol:"$"
    })
    const fetchAllCoin=async()=>{
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-PJC99U3sg2JJKL9SCWTR9NRQ'}
          };
          
          fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
            .then(response => response.json())
            .then(response => setAllCoin(response))
            .catch(err => console.error(err));
    }
    useEffect(()=>{
        fetchAllCoin()
    },[currency])

    const context_value={
        allCoin,currency,setCurrency

    }
    return(
        <Coin_context.Provider value={context_value}>
            {props.children}
        </Coin_context.Provider>
    )

}
export default Coin_context_Provider