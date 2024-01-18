"use client";

import Link from 'next/link'
import Image from 'next/image'
import { NAV_LINKS } from '@/constants'
import Button from './Button'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from 'react'
import { useWindowSize } from '@uidotdev/usehooks';
import Logo from "../public/powerexa.svg";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const { width } = useWindowSize()

    useEffect(() => {
        if (width && width > 1100) {
            setMenuOpen(false)
        }
    }, [width])

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }
    
  return (
    <>
        <nav className=" flexBetween max-container padding-container relative z-30 py-5">
            <Link href="/">
                {/* use svg instead of png */}
                <Image src={Logo} alt="logo" width={200} height={50} className='cursor-pointer' />
            </Link>

            <ul className='hidden h-full gap-12 min-[1100px]:flex'>
                {NAV_LINKS.map((link)=>(
                    <Link href={link.href} key={link.key} className='reguler-20 text-white flexCenter font-semibold cursor-pointer pb-1.5 transition-all hover:font-bold'>
                        {link.text}
                    </Link>
                ))}
            </ul>

            <div className='lg:flexCenter hidden'>
                <Button text='Teklif Al' />
            </div>

            <div className='lg:hidden'>
                <MenuIcon 
                    fontSize='large'
                    className='inline-block cursor-pointer bg-white rounded-full p-1'
                    sx={{ color: 'gray' }}
                    onClick={toggleMenu}
                />
            </div>

            <div className={`absolute top-0 left-0 h-screen w-screen bg-white z-20 ${menuOpen ? 'flex' : 'hidden'} flex-col items-center justify-center gap-12 `}>
                <CloseIcon 
                    fontSize='large'
                    className='inline-block cursor-pointer absolute top-5 right-5'
                    sx={{ color: 'black' }}
                    onClick={toggleMenu}
                />
                {NAV_LINKS.map((link)=>(
                    <Link 
                        href={link.href} 
                        onClick={()=>setMenuOpen(false)} 
                        key={link.key} className='reguler-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'>
                        {link.text}
                    </Link>
                ))}
                <Button text='Teklif Al' />
            </div>

        </nav>
    </>
  )
}

export default Navbar
