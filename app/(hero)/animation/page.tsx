import React from 'react'
import Hero from '../../../components/hero'
import animationSrc from '/public/images/animation.jpg'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Animation',
}

export default function Page() {
  return (
    <Hero imgUrl={animationSrc} altTxt="Animation Image" content="Animation"/>
  )
}
