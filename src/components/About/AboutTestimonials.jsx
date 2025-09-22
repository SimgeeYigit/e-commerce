import picture from '../../assets/aboutpage/Testimonials/picture.jpg';

function AboutTestimonials() {
    return (
        <div className='flex font-montserrat'>
            <div className='flex flex-col w-full bg-[#2A7CC7] justify-center gap-6 items-start px-[2.8125rem] md:px-[9.876rem]'>
                <h5 className='font-bold text-base text-[#FFFFFF]'>WORK WITH US</h5>
                <h2 className='font-bold text-[40px] text-[#FFFFFF]'>Now Let’s grow Yours</h2>
                <p className='font-normal text-sm text-[#FFFFFF]'>The gradual accumulation of information about atomic and <br/>
                    small-scale behavior during the first quarter of the 20th </p>
                <button className='border border-[#FFFFFF] rounded-[5px] px-10 py-[15px] font-bold font-sm text-[#FAFAFA]'>Button</button>
            </div>
            <img className='w-auto' src={picture} alt="Testimonial" />
        </div>
    );
}

export default AboutTestimonials;
