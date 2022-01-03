import React, { useEffect, useState } from 'react'
import instagramLogo from '../assets/owner/instagram.png'
import moreIcon from '../assets/owner/more.png'
import twitterLogo from '../assets/owner/twitter.png'
import './Main.css'
const Main = ({selectedPunk, punkListData}) =>
{
    const [activePunk, setActivePunk] = useState(punkListData[0]);
    useEffect(() =>
    {
        setActivePunk(punkListData[selectedPunk])
    }, [punkListData, selectedPunk])
  return (
    <div className='main'>
      <div className='mainContent'>
        <div className='punkHighlight'>
          <div className='punkContainer'>
            <img
              className='selectedPunk'
              src={activePunk.image_original_url}
              alt='Punk'
            />
          </div>
        </div>
        <div className='punkDetails' style={{ color: "#ffffff" }}>
          <div className='title'>
            {activePunk.name}
          </div>
          <div className='owner'>
            <div className='ownerImageContainer'>
              <img src={activePunk.owner.profile_img_url} alt='Owner' />
            </div>
            <div className='ownerDetails'>
              <div className='ownerNameAndHandle'>
                <div>{activePunk.owner.address}</div>
                <div className='ownerHandle'>@Mubasshir Ahmed</div>
              </div>
              <div className='ownerLink'>
                <img src={instagramLogo} alt='Instagram' />
              </div>
              <div className='ownerLink'>
                <img src={twitterLogo} alt='Twitter' />
              </div>
              <div className='ownerLink'>
                <img src={moreIcon} alt='More' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
