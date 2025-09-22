import one from '/assets/teamPage/Hero/1.jpg';
import two from '/assets/teamPage/Hero/2.jpg';
import three from '/assets/teamPage/Hero/3.jpg';
import four from '/assets/teamPage/Hero/4.jpg';
import five from '/assets/teamPage/Hero/5.jpg';

function TeamHero() {
    return (
        <section className='flex gap-3 justify-between'>
            <div className='grow basis-1/2'>
                <img src={one} alt="Team Hero 1" className='w-full h-auto' />
            </div>
            <div className="flex flex-wrap gap-3 basis-1/2">
                {[two, three, four, five].map((img, idx) => (
                    <img
                        key={idx}
                        src={img}
                        alt={`Team Hero ${idx + 2}`}
                        className="w-[calc(50%-6px)] h-auto object-cover"
                    />
                ))}
            </div>
        </section>
    );
}
export default TeamHero;