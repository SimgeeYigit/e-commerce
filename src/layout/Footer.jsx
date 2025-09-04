import { Instagram, Facebook, Twitter } from 'lucide-react';
import { Input, InputGroup, InputGroupText } from 'reactstrap';

function Footer() {
    return (
        <footer className="h-[30.5rem] w-auto">
            <div className='flex flex-col bg-[#FAFAFA] h-[8.875rem] items-start md:items-center justify-center md:justify-between px-[2.8125rem] md:px-[9.876rem] md:flex-row gap-4 md:gap-0'>
                <h3 className="font-montserrat font-bold text-[#252B42] text-2xl">Bandage</h3>
                <div className='flex gap-5'>
                    <a href='https://www.instagram.com' target="_blank"><Instagram className="w-6 h-6 text-[#23A6F0]" /></a>
                    <a href='https://www.facebook.com' target="_blank"><Facebook className="w-6 h-6 text-[#23A6F0]" /></a>
                    <a href='https://www.twitter.com' target="_blank"><Twitter className="w-6 h-6 text-[#23A6F0]" /></a>
                </div>
            </div>
            <div className='bg-[#FFFFFF] md:h-[17rem] h-auto py-[3.125rem] md:px-[9.876rem] px-[2.8125rem]'>
                <div className='flex flex-col justify-between md:flex-row gap-8'>
                    <div className='flex flex-col gap-5'>
                        <h5 className='flex flex-col font-montserrat font-bold text-[#252B42] text-base'>Company Info</h5>
                        <div className='flex flex-col gap-[0.625rem]'>
                            <p className='font-montserrat font-bold text-[#737373] text-sm'>About Us</p>
                            <p className='font-montserrat font-bold text-[#737373] text-sm'>Carrier</p>
                            <p className='font-montserrat font-bold text-[#737373] text-sm'>We are hiring</p>
                            <p className='font-montserrat font-bold text-[#737373] text-sm'>Blog</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h5 className='flex flex-col font-montserrat font-bold text-[#252B42] text-base'>Legal</h5>
                        <div className='flex flex-col gap-[0.625rem]'>
                            <p className='font-montserrat font-bold text-[#737373] text-sm'>About Us</p>
                            <p className='font-montserrat font-bold text-[#737373] text-sm'>Carrier</p>
                            <p className='font-montserrat font-bold text-[#737373] text-sm'>We are hiring</p>
                            <p className='font-montserrat font-bold text-[#737373] text-sm'>Blog</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h5 className='flex flex-col font-montserrat font-bold text-[#252B42] text-base'>Features</h5>
                        <div className='flex flex-col gap-[0.625rem]'>
                            <p className='font-montserrat font-bold text-[#737373] text-sm'>Business Marketing</p>
                            <p className='font-montserrat font-bold text-[#737373] text-sm'>User Analytic</p>
                            <p className='font-montserrat font-bold text-[#737373] text-sm'>Live Chat</p>
                            <p className='font-montserrat font-bold text-[#737373] text-sm'>Unlimited Support</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h5 className='flex flex-col font-montserrat font-bold text-[#252B42] text-base'>Resources</h5>
                        <div className='flex flex-col gap-[0.625rem]'>
                            <p className='font-montserrat font-bold text-[#737373] text-sm'>IOS & Android</p>
                            <p className='font-montserrat font-bold text-[#737373] text-sm'>Watch a Demo</p>
                            <p className='font-montserrat font-bold text-[#737373] text-sm'>Customers</p>
                            <p className='font-montserrat font-bold text-[#737373] text-sm'>API</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h5 className='flex flex-col font-montserrat font-bold text-[#252B42] text-base'>Get In Touch</h5>
                        <div className='flex flex-col gap-2'>
                            <InputGroup className='w-[20.0625rem] h-[3.625rem] flex items-center justify-center'>
                                <Input placeholder="Your Email"
                                    className='font-montserrat font-normal text-sm text-[#737373] w-[12.75rem] h-[3.625rem] rounded-l-[0.3125rem] border border-[#E6E6E6]
                            bg-[#E6E6E6] pl-[0.9375rem]' />
                                <button className='w-[7.3125rem] h-[3.625rem] rounded-r-[0.3125rem] border border-[#23A6F0] bg-[#23A6F0]
                                    font-montserrat font-normal text-sm text-[#FFFFFF] hover:bg-[#1b82c9]'>
                                    Subscribe
                                </button>
                            </InputGroup>
                            <p className='font-montserrat font-normal text-sm text-[#737373]'>Lore imp sum dolor</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex bg-[#FAFAFA] md:h-[4.625rem] items-center h-[6.125rem] justify-center md:justify-start'>
                <h6 className="font-montserrat font-bold text-[#737373] text-sm px-[2.8125rem] md:px-[9.876rem] text-center">Made With Love By <br className='block md:hidden'/>Finland All Right Reserved</h6>
            </div>
        </footer>
    );
}

export default Footer;