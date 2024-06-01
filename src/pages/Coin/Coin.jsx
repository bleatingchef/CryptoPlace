import React, { useContext, useEffect, useState } from 'react'
import './Coin.css'
import { useParams } from 'react-router-dom'
import { Coin_context } from '../../context/Coin_context';
// import Linechart from '../../components/LineChart/Linechart';
import Linechart from '../../components/Linechart/LineChart';
// import Linechart} from '../../components/Linechart/LineChart';
function Coin() {

  const {coinId} = useParams();
  const [coinData, setCoinData]=useState();
  const [historicalData, setHistoricalData]=useState();
  const {currency}=useContext(Coin_context);

  const fetchCoinData=async ()=>{
    const options = {method: 'GET', headers: {accept: 'application/json'}};

fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
  .then(response => response.json())
  .then(response => setCoinData(response))
  .catch(err => console.error(err));

  }

  
const fetchHistoricalData=async ()=>{
  const options = {method: 'GET', headers: {accept: 'application/json'}};

fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`, options)
  .then(response => response.json())
  .then(response => setHistoricalData(response))
  .catch(err => console.error(err));

}
  useEffect(()=>{
    fetchCoinData();
    fetchHistoricalData();
  },[currency])

if(coinData && historicalData){
  return (
    <div className='coin'>
      <div className="coin-name">
        <img src={coinData.image.large} alt="" />
        <p><b>{coinData.name}({coinData.symbol.toUpperCase() })</b></p>
      </div>
      <div className="coin-chart">
        <Linechart historicalData={historicalData}/>
      </div>

      <div className="coin-info">
        <ul>
          <li>Crypto Market Rank</li>
          <li>{coinData.market_cap_rank}</li>
        </ul>
        <ul>
          <li>Crypto Price</li>
          <li>{currency.symbol} {coinData.market_data.current_price[currency.name].toLocaleString()}</li>
        </ul>
      </div>
      
      </div>
  )

}

else{
  return (
    <div className='spinner'>
      <div className="spin"></div>
            
      </div>
  )
}
 
}

export default Coin