import { useState } from "react";
import { Phone, Mail, Instagram, Youtube, Facebook, Twitter, User, Search, ShoppingCart, Heart, ChevronDown, ChartNoAxesColumnIncreasing } from 'lucide-react';
import ShopDropdown from './ShopDropDown';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className='h-auto'>
            <div className='bg-[#252B42] h-[58px] hidden md:flex items-center justify-between px-6'>
                <div className='flex gap-2.5'>
                    <div className='header-text p-2.5 flex gap-x-[5px] items-center'>
                        <Phone className="w-4 h-4" />
                        <p>(225) 555-0118</p>
                    </div>
                    <a href="https://www.gmail.com" target="_blank">
                        <div className='header-text p-2.5 flex gap-x-[5px] items-center'>
                            <Mail className="w-4 h-4" />
                            <p>michelle.rivera@example.com</p>
                        </div>
                    </a>
                </div>

                <p className='header-text '>Follow Us and get a chance to win 80% off</p>

                <div className='header-text flex items-center gap-2.5 p-2.5'>
                    <p>Follow Us :</p>
                    <div className='flex gap-2.5 p-[5px]'>
                        <a href='https://www.instagram.com' target="_blank"><Instagram className="w-4 h-4" /></a>
                        <a href='https://www.youtube.com' target="_blank"><Youtube className="w-4 h-4" /></a>
                        <a href='https://www.facebook.com' target="_blank"><Facebook className="w-4 h-4" /></a>
                        <a href='https://www.twitter.com' target="_blank"><Twitter className="w-4 h-4" /></a>
                    </div>
                </div>
            </div>

            <nav className="bg-[#FFFFFF] flex items-center justify-between px-6 h-[58px] mt-3">
                <h1 className='font-montserrat font-bold text-2xl md:pl-3.5 text-[#252B42]'>Bandage</h1>

                <ul className='hidden md:flex navbar-text gap-[15px] items-center'>
                    <li>Home</li>
                    <ShopDropdown />
                    <li>About</li>
                    <li>Blog</li>
                    <li>Contact</li>
                    <li>Pages</li>
                </ul>

                <div className='text-[#3C403D] md:text-[#23A6F0] flex gap-4 items-center'>
                    <div className='flex items-center gap-[5px] font-montserrat font-bold text-sm'>
                        <User className="w-4 h-4" />
                        <p className='hidden md:block'>Login / Register</p>
                    </div>
                    <Search className="w-4 h-4" />
                    <div className='flex items-center gap-1'>
                        <ShoppingCart className="w-4 h-4" />
                        <p className='hidden md:font-montserrat font-normal text-xs'>1</p>
                    </div>
                    <div className='hidden md:flex items-center gap-1'>
                        <Heart className="w-4 h-4" />
                        <p className='font-montserrat font-normal text-xs'>1</p>
                    </div>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden"
                    >
                        <ChartNoAxesColumnIncreasing className='block -rotate-90 text-[#252B42] w-[1rem] h-[1rem]' />
                    </button>
                </div>
            </nav>

            {/* Mobil Menü (artık absolute değil, normal flow’da) */}
            {isMenuOpen && (
                <div className='md:hidden font-montserrat font-normal text-2xl text-[#737373] flex flex-col items-center gap-6 py-6 bg-white'>
                    <h1>Home</h1>
                    <h1>Product</h1>
                    <h1>Pricing</h1>
                    <h1>Contact</h1>
                </div>
            )}
        </header>
    )
}

export default Header;
