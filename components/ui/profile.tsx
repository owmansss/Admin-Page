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
import React, {useState, useEffect, useRef} from 'react'
import { redirect } from 'next/navigation'

export function Profile() {
  const [logout, setLogout] = useState(false)
  const [tempData, setTempData] = useState([])
  const initialized = useRef(false)
    const tempDataUser = async() => {
        try{
          const result = await axios.get("user/temp")
          setTempData(result.data)
          console.log(result.data)
        }
        catch(err) {
          console.log(err)
        }
      }
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
    if(!initialized.current){
      initialized.current = true
      tempDataUser()
    }
    else if(logout){
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
