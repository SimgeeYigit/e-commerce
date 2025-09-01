import { Phone, Mail, Instagram, Youtube, Facebook, Twitter } from 'lucide-react';

function Header() {
    return (
        <header className='bg-[#252B42] h-[58px] flex items-center justify-between px-6'>
            <div className='flex gap-2.5'>
                <div className='header-text p-2.5 flex gap-x-[5px] items-center'>
                    <Phone className="w-4 h-4" />
                    <p>(225) 555-0118</p>
                </div>
                <div className='header-text p-2.5 flex gap-x-[5px] items-center'>
                    <Mail className="w-4 h-4" />
                    <p>michelle.rivera@example.com</p>
                </div>
            </div>

            <p className='header-text '>Follow Us and get a chance to win 80% off</p>

            <div className='header-text flex items-center gap-2.5 p-2.5'>
                <p>Follow Us :</p>
                <div className='flex gap-2.5 p-[5px]'>
                    <Instagram className="w-4 h-4" />
                    <Youtube className="w-4 h-4" />
                    <Facebook className="w-4 h-4" />
                    <Twitter className="w-4 h-4" />
                </div>
            </div>
        </header>
    )
}

export default Header;