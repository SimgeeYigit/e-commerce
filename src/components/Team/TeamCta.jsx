import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

function TeamCta() {
    return (
        <div className="font-montserrat flex flex-col gap-[30px] items-center text-center py-20">
            <h2 className='font-bold text-[#252B42] text-[40px]'>Start your 14 days free trial</h2>
            <p className='font-normal text-sm text-[#737373]'>Met minim Mollie non desert Alamo est sit cliquey dolor<br />
                do met sent. RELIT official consequent.</p>
            <button className='border border-[#23A6F0] py-[15px] px-[40px] rounded-[5px] bg-[#23A6F0] text-[#FFFFFF]
                                font-bold text-sm'>Try it free now</button>
            <div className='flex gap-[34px] items-center'>
                <a href="https://www.twitter.com" target="_blank"><Twitter className="w-6 h-6" /></a>
                <a href="https://www.facebook.com" target="_blank"><Facebook className="w-6 h-6" /></a>
                <a href="https://www.instagram.com" target="_blank"><Instagram className="w-6 h-6" /></a>
                <a href="https://www.linkedin.com" target="_blank"><Linkedin className="w-6 h-6" /></a>
            </div>
        </div>
    );
}

export default TeamCta;