import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import PunkList from './components/PunkList';


function App()
{
  const [PunkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(0)
  useEffect(() =>
  {
    const getMyNfts = async () =>
    {
      const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x6f48A6D41779FafAefa94Cb6A6F449CC46718e5A&order_direction=asc')
    
      setPunkListData(openseaData.data.assets)
    }
    return getMyNfts()
  },[])
  return (
    <div className="app">
      <Header />
      {PunkListData.length > 0 && (
        <>
          <Main
            punkListData={PunkListData}
            selectedPunk={selectedPunk}
          />
          <PunkList
            punkListData={PunkListData}
            setSelectedPunk={setSelectedPunk} />
          </>
      )}
    </div>
  );
}

export default App;
