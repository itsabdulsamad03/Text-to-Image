import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between py-3 gap-4 mt-20'>

        <img src={assets.logo} alt="" width={150}/>

        <p className='flex-1 border-l text-sm border-gray-400 text-gray-500 max-sm:hidden pl-4'>Copyright @Akshat.dev | All rights reserved.</p>

        <div className='flex gap-2.5'>
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.instagram_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
        </div>
    </div>
  )
}

export default Footer