import one from '/assets/teamPage/Team/1.jpg';
import two from '/assets/teamPage/Team/2.jpg';
import three from '/assets/teamPage/Team/3.jpg';
import four from '/assets/teamPage/Team/4.jpg';
import five from '/assets/teamPage/Team/5.jpg';
import six from '/assets/teamPage/Team/6.jpg';
import seven from '/assets/teamPage/Team/7.jpg';
import eight from '/assets/teamPage/Team/8.jpg';
import nine from '/assets/teamPage/Team/9.jpg';
import { useState } from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

function Team() {
    const [teamMembers, setTeamMembers] = useState([
        {
            id: 1,
            name: "Username",
            position: "Profession",
            image: one,
            facebookLink: 'https://www.facebook.com',
            instagramLink: 'https://www.instagram.com',
            twitterLink: "https://www.twitter.com"
        },
        {
            id: 2,
            name: "Username",
            position: "Profession",
            image: two,
            facebookLink: 'https://www.facebook.com',
            instagramLink: 'https://www.instagram.com',
            twitterLink: "https://www.twitter.com"
        },
        {
            id: 3,
            name: "Username",
            position: "Profession",
            image: three,
            facebookLink: 'https://www.facebook.com',
            instagramLink: 'https://www.instagram.com',
            twitterLink: "https://www.twitter.com"
        },
        {
            id: 4,
            name: "Username",
            position: "Profession",
            image: four,
            facebookLink: 'https://www.facebook.com',
            instagramLink: 'https://www.instagram.com',
            twitterLink: "https://www.twitter.com"
        },
        {
            id: 5,
            name: "Username",
            position: "Profession",
            image: five,
            facebookLink: 'https://www.facebook.com',
            instagramLink: 'https://www.instagram.com',
            twitterLink: "https://www.twitter.com"
        },
        {
            id: 6,
            name: "Username",
            position: "Profession",
            image: six,
            facebookLink: 'https://www.facebook.com',
            instagramLink: 'https://www.instagram.com',
            twitterLink: "https://www.twitter.com"
        },
        {
            id: 7,
            name: "Username",
            position: "Profession",
            image: seven,
            facebookLink: 'https://www.facebook.com',
            instagramLink: 'https://www.instagram.com',
            twitterLink: "https://www.twitter.com"
        },
        {
            id: 8,
            name: "Username",
            position: "Profession",
            image: eight,
            facebookLink: 'https://www.facebook.com',
            instagramLink: 'https://www.instagram.com',
            twitterLink: "https://www.twitter.com"
        },
        {
            id: 9,
            name: "Username",
            position: "Profession",
            image: nine,
            facebookLink: 'https://www.facebook.com',
            instagramLink: 'https://www.instagram.com',
            twitterLink: "https://www.twitter.com"
        }
    ]);


    const groupedMembers = [];
    for (let i = 0; i < teamMembers.length; i += 3) {
        groupedMembers.push(teamMembers.slice(i, i + 3));
    }

    return (
        <div className="flex flex-col justify-center items-center py-[112px] font-montserrat gap-[112px] px-10">
            <h2 className='text-[40px] font-bold text-[#252B42] text-center'>Meet Our Team</h2>

            <div className='flex flex-col gap-16'>
                {groupedMembers.map((group, groupIndex) => (
                    <div key={groupIndex} className='flex flex-col md:flex-row justify-center gap-8'>
                        {group.map(member => (
                            <div key={member.id} className="flex flex-col items-center text-center">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="h-[231px]"
                                />
                                <div className='flex flex-col p-[30px] gap-[10px]'>
                                    <h5 className='font-bold text-[#252B42] text-base'>{member.name}</h5>
                                    <h6 className='font-bold text-sm text-[#737373]'>{member.position}</h6>
                                    <div className="flex gap-5 text-[#23A6F0]">
                                        <a href={member.facebookLink} target="_blank">
                                            <Facebook className="w-6 h-6" />
                                        </a>
                                        <a href={member.instagramLink} target="_blank">
                                            <Instagram className="w-6 h-6" />
                                        </a>
                                        <a href={member.twitterLink} target="_blank">
                                            <Twitter className="w-6 h-6" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Team;