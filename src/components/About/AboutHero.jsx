import aboutHero from '../../assets/aboutpage/hero.svg';

function AboutHero() {
    return (
        <div className='flex justify-between items-center gap-20 md:px-[150px] md:flex-row flex-col'>
            <div className="font-montserrat flex flex-col gap-[35px] py-20 md:py-0 items-center md:items-start md:px-0 px-14">
                <h5 className="font-bold text-base text-[#252B42] hidden md:block">ABOUT COMPANY</h5>
                <h1 className="font-bold text-[40px] md:text-[58px] text-[#252B42]">ABOUT US</h1>
                <h4 className="font-normal text-xl text-[#737373] text-center md:text-left">
                    We know how large objects will act, <br className='hidden md:block' />
                    but things on a small scale 
                    <span className='md:hidden'> just do not act that way.</span></h4>
                <button
                    className="w-[193px] font-montserrat rounded-[5px] py-[15px] px-10 bg-[#23A6F0] text-montserrat font-bold text-sm text-[#FFFFFF]">Get Quote Now</button>
            </div>
            <div>
                <img className='w-[100%] h-auto md:w-auto md:max-w-none object-cover md:mr-[-120px]' src={aboutHero} alt="about-hero" />
            </div>
        </div>
    )
}

export default AboutHero;
