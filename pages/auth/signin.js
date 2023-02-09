import Header from '@/components/Header'
import NextAuth from 'next-auth/next'
import React from 'react'
import { getProviders, signIn } from "next-auth/react"
import { authOptions } from '../api/auth/[...nextauth]'

export default function signin({providers}) {
  return (
    <>
        <Header />
        <div className="mt-40">
            {Object.values(providers).map(provider => (
                <div className="flex flex-col items-center" key={provider.name}>
                    <img 
                    className='w-52 object-cover'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png'/>
                    <p className='text-sm italic my-10 text-center'>This website is created for learning purposes only</p>
                    <button className="bg-red-400 rounded-lg text-white p-3 hover:bg-red-500" onClick={() => signIn(provider.id, {callbackUrl: "/"})}>Sign in with {provider.name} </button>
                </div>
            ))}
        </div>
    </>
  )
}

export async function getServerSideProps() {
    const providers = await getProviders();
    return {
        props: { providers },
    };
}
