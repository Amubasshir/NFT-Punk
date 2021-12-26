import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import PunkList from './components/PunkList';


function App()
{
  const [punkListData, setPunkListData] = useState([])
  useEffect(() =>
  {
    const getMyNfts = async () =>
    {
      const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x6f48A6D41779FafAefa94Cb6A6F449CC46718e5A&order_direction=asc')
      console.log(openseaData.data.assets)
      setPunkListData(openseaData.data.assets)
    }
    return getMyNfts()
  },[])
  return (
    <div className="app">
      <Header />
     
      <PunkList punkListData={punkListData}/>
    </div>
  );
}

export default App;
