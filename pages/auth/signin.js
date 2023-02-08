import Header from '@/components/Header'
import NextAuth from 'next-auth/next'
import React from 'react'
import { getProviders, signIn } from "next-auth/react"
import { authOptions } from '../api/auth/[...nextauth]'

export default function signin({providers}) {
  return (
    <>
        <Header />
        <div className="">
            {Object.values(providers).map(provider => (
                <div key={provider.name}>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png'/>
                    <p>This website is created for learning purposes only</p>
                    <button onClick={() => signIn(provider.id, {callbackUrl: "/"})}>Sign in with {provider.name} </button>
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
