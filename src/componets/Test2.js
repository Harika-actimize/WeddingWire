import { Divider } from '@mui/material'
import React from 'react'

function Test() {
  return (
    <div>
    <Divider/>
      <section className='columnsec'>
        <div className='columnsec_tile'>
          <div className='columnsec_title'>Easily plan your wedding</div>
          <a href='#' className='columnsec_link'>
          Get started
          <i className='columnsec_linksvg'>
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1024 1024"><g transform="rotate(90 512 512)"><path fill="currentColor" d="m488.832 344.32l-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872l319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"/></g></svg>
          </i>
          </a>
        </div>
        <ul className='homeToolsCards__cardList'>
          <li className='homeToolsCards__cardItem'>
            <img className='homeToolsCards__icon' src='https://cdn1.weddingwire.in/assets/svg/original/illustration/search.svg'>
            </img>
            <a className='homeToolsCards__cardLink'>Wedding Venues</a>
          </li>
          <li className='homeToolsCards__cardItem'>
            <img className='homeToolsCards__icon' src='https://cdn1.weddingwire.in/assets/svg/original/illustration/websites.svg'>
            </img>
            <a className='homeToolsCards__cardLink'>Wedding Website</a>
          </li>
          <li className='homeToolsCards__cardItem'>
            <img className='homeToolsCards__icon' src='https://cdn1.weddingwire.in/assets/svg/original/illustration/notebook.svg'>
            </img>
            <a className='homeToolsCards__cardLink'>Planning Tools</a>
          </li>
          <li className='homeToolsCards__cardItem'>
            <img className='homeToolsCards__icon' src='https://cdn1.weddingwire.in/assets/svg/original/illustration/lightbulb.svg'>
            </img>
            <a className='homeToolsCards__cardLink'>Ideas</a>
          </li>
          <li className='homeToolsCards__cardItem'>
            <img className='homeToolsCards__icon' src='https://cdn1.weddingwire.in/assets/svg/original/illustration/camera.svg'>
            </img>
            <a className='homeToolsCards__cardLink'>Real Weddings</a>
          </li>
          <li className='homeToolsCards__cardItem'>
            <img className='homeToolsCards__icon' src='https://cdn1.weddingwire.in/assets/svg/original/illustration/chat_bubble.svg'>
            </img>
            <a className='homeToolsCards__cardLink'>Community</a>
          </li>

        </ul>

      </section>
    </div>
  )
}

export default Test