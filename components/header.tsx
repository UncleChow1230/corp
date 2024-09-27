"use client" // 声明这是一个客户端组件

import Link from 'next/link' // 导入Next.js的Link组件用于路由
import React from 'react' // 导入React
import { usePathname } from 'next/navigation' // 导入usePathname钩子用于获取当前路径


// 定义导航链接数据
const linkData = [
  {
    name: 'Derivatives',
    href: '/derivatives'
  },
  {
    name: 'Toys',
    href: '/toys'
  },
  {
    name: 'Animation',
    href: '/animation'
  }
]



export default function Header() {
  const pathname = usePathname(); // 获取当前路径

  return (
   <div className="absolute top-0 left-0 w-full z-10"> {/* 创建一个全屏覆盖的容器 */}
          <div className="flex justify-between container mx-auto text-white p-8 items-center"> {/* 创建一个弹性布局的容器，用于放置导航元素 */}
            <Link className="text-3xl font-bold" href="/">Home</Link> {/* 主页链接 */}
            <div className="text-xl space-x-4 flex gap-6"> {/* 导航链接容器 */}
                {linkData.map((link) => (
                    <Link 
                    key={link.name} 
                    className={`
                      relative inline-block
                      ${pathname === link.href 
                        ? 'text-blue-600'
                        : 'text-white hover:text-gray-300'
                      }
                      transition-colors duration-300 ease-in-out
                      hover:animate-shake-rotate
                    `}
                      href={link.href}
                    >
                      {link.name}
                    </Link>
                ))}
            </div>
      </div>
    </div>
  )
}
