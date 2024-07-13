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
        expanded ? 'w-1/8' : 'w-20'
      } w-1/8 overflow-hidden transition-all flex flex-col h-screen justify-center items-end border-r bg-gray-600 text-white gap-5`}
    >
      <div className='w-5/6 h-1/2 flex justify-between items-center'>
        <img
          src='/vercel.svg'
          className={`overflow-hidden transition-all ${
            expanded ? 'w-1/2' : 'w-0'
          }`}
        />
        <Button
          onClick={() => setExpanded((curr) => !curr)}
          variant={'destructive'}
          className='w-[50px] mr-3'
        >
          {expanded ? <ChevronFirst /> : <ChevronLast />}
        </Button>
      </div>
      <nav className='flex flex-col mb-[40vh] gap-6 px-2 items-start'>
        {links.map((link, index) => {
          const isActive = currentPath === link.href

          return (
            <Link
              key={index}
              href={link.href}
              passHref
              className={`${cn(
                buttonVariants({
                  variant: isActive ? 'destructive' : 'ghost',
                  size: 'lg',
                })
              )} text-xl w-full`}
            >
              <link.icon
                className={`${expanded ? 'mr-2' : '-mr-6'} w-6 transition-all`}
              />
              {expanded && link.title}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
