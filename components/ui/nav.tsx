'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ChevronFirst, ChevronLast, LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button, buttonVariants } from './button'

interface NavLink {
  title: string
  href: string
  icon: LucideIcon
  variant: 'destructive' | 'ghost'
}

interface NavProps {
  links: NavLink[]
  currentPath: string
}

export function Nav({ links, currentPath }: NavProps) {
  const [expanded, setExpanded] = useState(true)

  return (
    <div
      className={`${
        expanded ? 'w-1/8' : 'w-22'
      } w-1/8 overflow-hidden transition-all flex flex-col h-screen justify-center items-end border-r bg-[#393E46] text-white gap-5`}
    >
      <div className='w-5/6 h-1/2 flex justify-between items-center'>
        <img
          src='/logo.png'
          className={`overflow-hidden transition-all ${
            expanded ? 'w-1/2' : 'w-0'
          }`}
        />
        <Button
          onClick={() => setExpanded((curr) => !curr)}
          variant={'destructive'}
          className={`w-[50px] mr-3 ${!expanded && 'mr-2'} `}
        >
          {expanded ? <ChevronFirst /> : <ChevronLast />}
        </Button>
      </div>
      <nav className='w-full flex flex-col mb-[40vh] gap-6 px-2'>
        <div className='flex flex-col items-start w-full gap-6'>
          {links.map((link, index) => {
            const isActive = currentPath === link.href

            return (
              <div
                className={`w-full gap-x-2 flex flex-col items-start ${cn(
                  buttonVariants({
                    variant: isActive ? 'destructive' : 'ghost',
                    size: 'lg',
                  })
                )}`}
              >
                <Link
                  key={index}
                  href={link.href}
                  passHref
                  className='w-full flex gap-x-2 items-center'
                >
                  <link.icon
                    className={`${
                      expanded ? 'mr-2' : '-mr-8'
                    } w-6 transition-all`}
                  />
                  {expanded && link.title}
                </Link>
              </div>
            )
          })}
        </div>
      </nav>
    </div>
  )
}
