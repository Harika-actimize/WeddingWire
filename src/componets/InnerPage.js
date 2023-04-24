import React from 'react'
import InteractiveList from './Navbar';
import Footer from './Footer';
import Mumbai from './Mumbai';


export default function Innerpage() {
  return (
    <div>
      {/* <ScrollDialog/> */}
      <InteractiveList />
      <Mumbai/>
    <Footer/>

    </div>
  )
}
