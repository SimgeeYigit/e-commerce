import { TrendingUp, BookOpenText, BookUser } from 'lucide-react';

function Service() {
    return (
        <div className='flex flex-col mx-[9.876rem] py-20 gap-y-20'>
            <div className="flex flex-col justify-center items-center gap-2.5">
                <h4 className="font-montserrat font-normal text-[#737373] text-xl">Featured Products</h4>
                <h3 className="font-montserrat font-bold text-[#252B42] text-2xl">THE BEST SERVICES</h3>
                <p className="font-montserrat font-normal text-[#737373] text-sm">Problems trying to resolve the conflict between</p>
            </div>
            <div className='flex justify-around'>
                <div className='flex flex-col items-center w-[33%] py-[2.1875rem] px-10 gap-y-5'>
                    <BookUser className='w-[4.5rem] h-[4.5rem] text-[#23A6F0]'/>
                    <h3 className='font-montserrat font-bold text-[#252B42] text-2xl'>Easy Wins</h3>
                    <p className='font-montserrat font-normal text-[#737373] text-sm text-center'>Get your best looking smile<br />now!</p>
                </div>
                <div className='flex flex-col items-center w-[33%] py-[2.1875rem] px-10 gap-y-5' >
                    <BookOpenText className='w-[4.5rem] h-[4.5rem] text-[#23A6F0]'/>
                    <h3 className='font-montserrat font-bold text-[#252B42] text-2xl'>Concrete</h3>
                    <p className='font-montserrat font-normal text-[#737373] text-sm text-center'>Defalcate is most focused in<br />helping you discover your most <br /> beautiful smile</p>
                </div>
                <div className='flex flex-col items-center w-[33%] py-[2.1875rem] px-10 gap-y-5'>
                    <TrendingUp className='w-[4.5rem] h-[4.5rem] text-[#23A6F0]' />
                    <h3 className='font-montserrat font-bold text-[#252B42] text-2xl'>Hack Growth</h3>
                    <p className='font-montserrat font-normal text-[#737373] text-sm text-center'>Overcame any hurdle or any <br />other problem.</p>
                </div>
            </div>
        </div>
    );
}

export default Service;