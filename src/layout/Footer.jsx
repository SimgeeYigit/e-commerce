import { Instagram, Facebook, Twitter } from 'lucide-react';
import { Input, InputGroup, InputGroupText } from 'reactstrap';

function Footer() {
    return (
        <footer className="h-[30.5rem] w-auto">
            <div className='flex bg-[#FAFAFA] h-[8.875rem] items-center justify-between px-[9.876rem]'>
                <h3 className="font-montserrat font-bold text-[#252B42] text-2xl">Bandage</h3>
                <div className='flex gap-5'>
                    <a href='https://www.instagram.com' target="_blank"><Instagram className="w-6 h-6 text-[#23A6F0]" /></a>
                    <a href='https://www.facebook.com' target="_blank"><Facebook className="w-6 h-6 text-[#23A6F0]" /></a>
                    <a href='https://www.twitter.com' target="_blank"><Twitter className="w-6 h-6 text-[#23A6F0]" /></a>
                </div>
            </div>
            <div className='bg-[#FFFFFF] h-[17rem] py-[3.125rem] px-[9.876rem]'>
                <div className='flex justify-between'>
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
            <div className='flex bg-[#FAFAFA] h-[4.625rem] items-center'>
                <h6 className="font-montserrat font-bold text-[#737373] text-sm px-[9.876rem]">Made With Love By Finland All Right Reserved</h6>
            </div>
        </footer>
    );
}

export default Footer;