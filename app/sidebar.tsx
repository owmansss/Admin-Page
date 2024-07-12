'use client'

import React from 'react'
import { Inbox,  Anvil, Notebook, Trash2, Archive, House, File, Speech, Map } from 'lucide-react'
import { Nav } from '@/components/ui/nav'
import { LucideIcon } from 'lucide-react'
import { AvatarIcon } from '@radix-ui/react-icons'

interface NavLink {
  title: string
  href: string
  icon: LucideIcon
  variant: 'destructive' | 'ghost'
}

interface SideNavbarProps {
  currentPath: string
}

export function SideNavbar({ currentPath }: SideNavbarProps) {
  const links: NavLink[] = [
    {
      title: 'Dashboard',
      href: '/',
      icon: House,
      variant: 'ghost',
    },
    {
      title: 'Project Management',
      href: '/section/project',
      icon: File,
      variant: 'ghost',
    },
    {
      title: 'Incident Management',
      href: '/section/incident',
      icon: Notebook,
      variant: 'ghost',
    },
    {
      title: 'Material Management',
      href: '/section/material',
      icon: Anvil,
      variant: 'ghost',
    },
    {
      title: 'User Management',
      href: '/section/user',
      icon: Speech,
      variant: 'ghost',
    },
    {
      title: 'Site Management',
      href: '/section/site',
      icon: Map,
      variant: 'ghost',
    },
  ]

  return <Nav links={links} currentPath={currentPath} />
}
