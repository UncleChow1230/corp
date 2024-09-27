import Image,{ StaticImageData } from 'next/image'
import React from 'react'


interface IProps {
  imgUrl: StaticImageData
  altTxt: string
  content: string
}

export default function Hero(props: IProps) {
  return (
    <div className="h-screen relative">
      <div className="absolute inset-0 -z-10">
        <Image src={props.imgUrl} alt={props.altTxt} fill style={{objectFit: 'cover'}}/>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-transparent opacity-70"></div>
      </div>
      <div className="z-10 h-screen flex items-center justify-center">
        <h1 className="text-white text-7xl transform -translate-y-12">{props.content}</h1>
      </div>
    </div>
  )
}
