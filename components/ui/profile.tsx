'use client'
import { Speech } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from './avatar'
import { Button } from './button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from './dropdown-menu'

import axios from '../../app/section/api/axios'
import React, {useState, useEffect} from 'react'
import { redirect } from 'next/navigation'

export function Profile() {
  const [logout, setLogout] = useState(false)
  const handleLogout = async(e) =>{
    e.preventDefault()
    try{
      const result = await axios.delete("users/logout")
      setLogout(true)
      alert("logout berhasil")
    }
    catch(err){
      alert(err)
    }  
  }
  useEffect(()=>{
    if(logout){
      redirect("/")
    }

  },[logout, redirect])
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
          className='absolute top-10 right-10 h-50 w-50 border-2 rounded-full '
        >
          <Avatar className='h-10 w-10'>
            <AvatarImage src='/5184.png' alt='@shadcn' />
            <AvatarFallback>
              <Speech />
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56' align='end' forceMount>
        <DropdownMenuLabel className='font-normal'>
          <div className='flex flex-col space-y-1'>
            <p className='text-sm font-medium leading-none'>UserName</p>
            <p className='text-xs leading-none text-muted-foreground'>
              my role is: ....
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <button
          onClick={(e)=>handleLogout(e)}>
        Log out</button>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
