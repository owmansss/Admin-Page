'use client'

import React from 'react'
import { Inbox, File, Send, ArchiveX, Trash2, Archive } from 'lucide-react'
import { Nav } from '@/components/ui/nav'
import { LucideIcon } from 'lucide-react'

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
      icon: Inbox,
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
      icon: Send,
      variant: 'ghost',
    },
    {
      title: 'Material Management',
      href: '/section/material',
      icon: ArchiveX,
      variant: 'ghost',
    },
    {
      title: 'User Management',
      href: '/section/user',
      icon: Trash2,
      variant: 'ghost',
    },
    {
      title: 'Site Management',
      href: '/section/site',
      icon: Archive,
      variant: 'ghost',
    },
  ]

  return <Nav links={links} currentPath={currentPath} />
}
