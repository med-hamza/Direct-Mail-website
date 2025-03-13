import Image from 'next/image'
import React from 'react'
import { menu } from '@/utils/menuData'
import Link from 'next/link'


const Header = () => {
    return (
        <div className='flex justify-between'>
            <div>
                <Image
                    src="/images/mail_magnet_logo.png"
                    alt='MailMagnet'
                    width={160}
                    height={32}
                />
            </div>
            <div className=' hidden lg:flex  items-center justify-center gap-5'>
                <nav className='flex items-center gap-5'>
                    {menu.map((item) => (
                        <Link href='' className=' font-medium' key={item.id}>
                            <p> {item.title} </p>
                        </Link>
                    ))}
                </nav>
                <div className=' flex items-center gap-4'>
                    <button className=" btn-primary ">
                        Login
                    </button>
                    <button className="btn-secondary">
                        Create free account
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header
