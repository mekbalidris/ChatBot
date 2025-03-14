import React from 'react'
import profile from '../assets/profile.png'

export default function Nav() {
  return (
    <>
        <nav>
            <header className='flex flex-row px-20 justify-between items-center'>
                <div className='text-4xl text-white'>☰</div>
                <div className='text-4xl font-main text-main drop-shadow-lg'>Chatbot</div>
                <img className='pt-2' src={profile} width={60} />
            </header>
        </nav>
    </>
  )
}
