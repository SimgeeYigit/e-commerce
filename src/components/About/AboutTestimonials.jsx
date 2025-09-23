import picture from '../../assets/aboutpage/Testimonials/picture.jpg';

function AboutTestimonials() {
    return (
        <div className='flex font-montserrat'>
            <div className='flex flex-col w-full bg-[#2A7CC7] justify-center gap-6 items-center md:items-start px-[2.8125rem] md:px-[9.876rem] py-[100px] md:py-0'>
                <h5 className='font-bold text-base text-[#FFFFFF]'>WORK WITH US</h5>
                <h2 className='font-bold text-[40px] text-[#FFFFFF] md:text-left text-center'>Now Let’s grow Yours</h2>
                <p className='font-normal text-sm text-[#FFFFFF] text-center md:text-left'>
                    The gradual accumulation of information about atomic and <br className='hidden md:inline' />
                    small-scale behavior during the first quarter of the 20th </p>
                <button className='border border-[#FFFFFF] rounded-[5px] px-10 py-[15px] font-bold font-sm text-[#FAFAFA]'>Button</button>
            </div>
            <img className='w-auto hidden md:inline' src={picture} alt="Testimonial" />
        </div>
    );
}

export default AboutTestimonials;
