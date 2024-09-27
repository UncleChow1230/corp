import React from 'react'
import Hero from '../../../components/hero'
import derivativesSrc from '/public/images/derivatives.png'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Derivatives',
}

export default function Page() {
  return (
    <Hero imgUrl={derivativesSrc} altTxt="Derivatives Image" content="Derivatives"/>
  )
}
