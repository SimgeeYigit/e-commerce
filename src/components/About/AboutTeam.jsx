import one from '../../assets/aboutpage/Team/user-1.png';
import two from '../../assets/aboutpage/Team/user-2.jpg';
import three from '../../assets/aboutpage/Team/user-3.jpg';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { useState } from 'react';

function AboutTeam() {
    const [teamMembers, setTeamMembers] = useState([
        {
            id: 1,
            name: "Username",
            position: "Profession",
            image: one,
            facebookLink:'https://www.facebook.com',
            instagramLink:'https://www.instagram.com',
            twitterLink:"https://www.twitter.com"
        },
        {
            id: 2,
            name: "Username",
            position: "Profession",
            image: two,
            facebookLink:'https://www.facebook.com',
            instagramLink:'https://www.instagram.com',
            twitterLink:"https://www.twitter.com"
        },
        {
            id: 3,
            name: "Username",
            position: "Profession",
            image: three,
            facebookLink:'https://www.facebook.com',
            instagramLink:'https://www.instagram.com',
            twitterLink:"https://www.twitter.com"
        }
    ]);

    return (
        <div className='font-montserrat flex flex-col py-[112px] md:gap-[112px] gap-[50px]'>
            <div className="flex flex-col items-center text-center gap-[10px] px-16 md:px-0">
                <h2 className="font-bold text-[40px] text-[#252B42]">Meet Our Team</h2>
                <p className="font-normal text-sm text-[#737373]">Problems trying to resolve the conflict between <br className='hidden md:inline' />
                    the two major realms of Classical physics: Newtonian mechanics </p>
            </div>
            <div className='flex gap-[30px] justify-center md:flex-row flex-col px-10 md:px-0'>
                {teamMembers.map(member => (
                    <div key={member.id} className="flex flex-col items-center gap-[10px]">
                        <img className='w-[100%] h-auto md:w-auto md:max-w-none object-cover' src={member.image} alt={member.name} />
                        <h3 className="font-bold text-lg text-[#252B42]">{member.name}</h3>
                        <p className="font-normal text-sm text-[#737373]">{member.position}</p>
                        <div className="flex gap-5 text-[#23A6F0]">
                            <a href={member.facebookLink} target="_blank"><Facebook className="w-6 h-6" /></a>
                            <a href={member.instagramLink} target="_blank"><Instagram className="w-6 h-6" /></a>
                            <a href={member.twitterLink} target="_blank"><Twitter className="w-6 h-6" /></a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default AboutTeam;