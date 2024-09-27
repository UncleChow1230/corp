import React from 'react'
import Hero from '../../../components/hero'
import toysSrc from '/public/images/toys.jpg'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Toys',
}

export default function Page() {
  return (
    <Hero imgUrl={toysSrc} altTxt="Toys Image" content="Toys"/>
  )
}
