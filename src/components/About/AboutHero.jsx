import aboutHero from '../../assets/aboutpage/hero.svg';

function AboutHero() {
    return (
            <div className='flex justify-between items-center gap-20 px-[150px]'>
                <div className="font-montserrat flex flex-col gap-[35px]">
                    <h5 className="font-bold text-base text-[#252B42]">ABOUT COMPANY</h5>
                    <h1 className="font-bold text-[58px] text-[#252B42]">ABOUT US</h1>
                    <h4 className="font-normal text-xl text-[#737373]">We know how large objects will act,<br />
                        but things on a small scale</h4>
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
