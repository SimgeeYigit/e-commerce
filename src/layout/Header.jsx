import { useState } from "react";
import { Phone, Mail, Instagram, Youtube, Facebook, Twitter, User, Search, ShoppingCart, Heart, ChevronDown, ChartNoAxesColumnIncreasing, LogOut } from 'lucide-react';
import ShopDropdown from './ShopDropDown';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Gravatar from 'react-gravatar';
import { logout } from "../Redux/store/actions/clientActions";

function Header() {
    const dispatch = useDispatch();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const clientName = useSelector(state => state.client.user.name);
    const clientEmail = useSelector(state => state.client.user.email);

    const history = useHistory();

    return (
        <header className='h-auto'>
            <div className='bg-[#252B42] h-[58px] hidden md:flex items-center justify-between px-6'>
                <div className='flex gap-2.5'>
                    <div className='header-text flex gap-x-[5px] items-center'>
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

                <div className='header-text flex items-center gap-2.5'>
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
                <h1 className='font-montserrat font-bold text-2xl text-[#252B42]'>Bandage</h1>

                <ul className='hidden md:flex navbar-text gap-[15px] items-center'>
                    <button><li onClick={() => history.push("/")}>Home</li></button>
                    <ShopDropdown />
                    <button><li onClick={() => history.push("/about")}>About</li></button>
                    <li>Blog</li>
                    <button><li onClick={() => history.push("/contact")}>Contact</li></button>
                    <button><li onClick={() => history.push("/team")}>Team</li></button>
                </ul>

                <div className='text-[#3C403D] md:text-[#23A6F0] flex gap-1 md:gap-4 items-center'>
                    <div className='flex items-center gap-[5px] font-montserrat font-bold text-sm'>
                        {clientName ?
                            <div className="flex gap-2 items-center">
                                <Gravatar email={clientEmail} size={16} />
                                <p>{clientName}</p>
                            </div> :
                            <>
                                <User className="w-4 h-4 cursor-pointer" onClick={() => history.push("/signup")} />
                                <button
                                    onClick={() => history.push("/login")}
                                    className="hover:underline md:block hidden"
                                >
                                    Login
                                </button>
                                <span className="md:block hidden">/</span>
                                <button
                                    onClick={() => history.push("/signup")}
                                    className="hover:underline md:block hidden"
                                >
                                    Register
                                </button>
                            </>
                        }
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
                    <div>
                        {clientName ?
                            <LogOut className="w-4 h-4 cursor-pointer" onClick={() => dispatch(logout())} /> :
                            null}
                    </div>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden"
                    >
                        <ChartNoAxesColumnIncreasing className='block -rotate-90 text-[#252B42] w-[1rem] h-[1rem]' />
                    </button>
                </div>
            </nav>

            {isMenuOpen && (
                <div className='md:hidden font-montserrat font-normal text-2xl text-[#737373] flex flex-col items-center gap-6 py-6 bg-white'>
                    <h1 onClick={() => history.push("/")}>Home</h1>
                    <h1 onClick={() => history.push("/shop")}>Shop</h1>
                    <h1 onClick={() => history.push("/product")}>Product</h1>
                    <h1 onClick={() => history.push("/about")}>About</h1>
                    <h1>Pricing</h1>
                    <h1 onClick={() => history.push("/contact")}>Contact</h1>
                    <h1 onClick={() => history.push("/team")}>Team</h1>
                </div>
            )}
        </header>
    )
}

export default Header;
