import { Instagram, Youtube, Facebook, Twitter, Linkedin} from 'lucide-react';
import contactImg from '../../assets/contact/contact.svg';

function ContactHero() {
    return (
        <div className='flex items-center justify-between px-[20px] md:px-[180px] gap-20 font-montserrat md:flex-row flex-col'>
            <div className='flex flex-col gap-[35px] md:items-start items-center text-center md:text-start md:pt-0 pt-8'>
                <h5 className='font-bold text-base text-[#252B42]'>CONTACT US</h5>
                <h1 className='font-bold text-[40px] md:text-[58px] text-[#252B42]'>Get in touch<br/>
                    today!</h1>
                <h4 className='font-normal text-[#737373] text-xl w-[80%] md:w-[100%]'>We know how large objects will act,<br className='hidden md:block'/>
                    but things on a small scale <span className='md:hidden'>just do not act that way.</span></h4>
                <div className='flex flex-col font-bold text-2xl gap-4'>
                    <h3>Phone : +451 215 215 </h3>
                    <h3>Fax : +451 215 215</h3>
                </div>
                <div className='flex items-center gap-[34px] p-[10px]'>
                    <a href='https://www.twitter.com' target="_blank"><Twitter fill='black' className="w-[30px] h-[30px]" /></a>
                    <a href='https://www.facebook.com' target="_blank"><Facebook className="w-[30px] h-[30px]" /></a>
                    <a href='https://www.instagram.com' target="_blank"><Instagram className="w-[30px] h-[30px]" /></a>
                    <a href='https://www.linkedin.com' target="_blank"><Linkedin className="w-[30px] h-[30px]" /></a>
                </div>
            </div>
            <div>
                <img 
                className='w-[100%] h-auto md:w-auto md:max-w-none object-cover md:mr-[-150px]'
                src={contactImg} alt="contact-hero" />
            </div>
        </div>
    );
}
export default ContactHero;