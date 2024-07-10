import React from 'react'
import Link from 'next/link'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from './button'

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
  return (
    <div className='flex flex-col h-screen justify-center border-r'>
      <nav className='grid gap-6 px-2'>
        {links.map((link, index) => {
          const isActive = currentPath === link.href

          return (
            <Link
              key={index}
              href={link.href}
              passHref
              className={cn(
                buttonVariants({
                  variant: isActive ? 'destructive' : 'ghost',
                  size: 'lg',
                })
              )}
            >
              <link.icon className='mr-2 h-4 w-4' />
              {link.title}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
