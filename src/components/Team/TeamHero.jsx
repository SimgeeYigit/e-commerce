import one from '/assets/teamPage/Hero/Desktop/1.jpg';
import two from '/assets/teamPage/Hero/Desktop/2.jpg';
import three from '/assets/teamPage/Hero/Desktop/3.jpg';
import four from '/assets/teamPage/Hero/Desktop/4.jpg';
import five from '/assets/teamPage/Hero/Desktop/5.jpg';

import oneM from '/assets/teamPage/Hero/Mobile/1.jpg';
import twoM from '/assets/teamPage/Hero/Mobile/2.jpg';
import threeM from '/assets/teamPage/Hero/Mobile/3.jpg';
import fourM from '/assets/teamPage/Hero/Mobile/4.jpg';
import fiveM from '/assets/teamPage/Hero/Mobile/5.jpg';

function TeamHero() {
    return (
        <section className='flex md:flex-row flex-col gap-3 justify-between'>
            <div className='grow basis-1/2'>
                <img src={one} alt="Team Hero 1" className='w-full h-auto hidden md:block' />
                <img src={oneM} alt="Team Hero 1 Mobile" className='w-full h-auto md:hidden' />
            </div>
            <div className="flex flex-wrap gap-3 basis-1/2">
                {[two, three, four, five].map((img, idx) => (
                    <img
                        key={idx}
                        src={img}
                        alt={`Team Hero ${idx + 2}`}
                        className="w-[calc(50%-6px)] h-auto object-cover hidden md:block"
                    />
                ))}
                {[twoM, threeM, fourM, fiveM].map((img, idx) => (
                    <img
                        key={idx}
                        src={img}
                        alt={`Team Hero ${idx + 2}`}
                        className="w-[calc(50%-6px)] h-auto object-cover md:hidden"
                    />
                ))}
            </div>
        </section>
    );
}
export default TeamHero;