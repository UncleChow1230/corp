import Image from 'next/image'
import React from 'react'
import homeSrc from '/public/images/home.jpg'
import Hero from '../../components/hero'
import Header from '../../components/header'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
}


export default function Page() {
  return (
    <Hero imgUrl={homeSrc} altTxt="Home Image" content="Welcome to My Portfolio"/>
  )
}
