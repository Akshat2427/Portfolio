import React from 'react';
import { Link } from 'react-router-dom';
function Bhaya() {
   
    return (
        <div className='h-screen w-full p-8 pt-0  '>
             <Link
    to="/"
    className="h-[10vh] w-[10vh] absolute left-8 top-8 bg-black rounded-full flex items-center justify-center hidden sm:flex"
>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6 text-white transform rotate-180"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
    </svg>
</Link>

           
            <div className='pl-8 py-8' style={{ fontFamily: "revert" }}>
                <h1 className='text-7xl pb-7 text-center underline' style={{ fontFamily: "Spicy Rice" }}>
                    I Wonder How, I Wonder Why!!
                </h1>
            </div>

            {/* First Section */}
            <div className="mb-12">
                <div className="flex md:flex-nowrap flex-wrap items-center space-x-8">
                    <div className="w-full sm:w-1/2">
                        <img src="CU.jpg" className='w-full h-auto rounded-lg shadow-lg' alt="College Image" />
                    </div>
                    <div className="w-full sm:w-1/2 mt-8 sm:mt-0">
                        <h1
                            style={{ fontFamily: "Spicy Rice" }}
                            className="text-5xl text-center font-bold text-[#2c3e50] mb-6"
                        >
                            Why is the domain bhaya.tech and not akshat.tech or something else?
                        </h1>
                        <div className="pt-6">
                            <h3 className='text-2xl text-[#7f8c8d] leading-relaxed'>
                                Let me share the story behind it. Back in my college days, there was a popular TV show called 
                                <em> Taarak Mehta Ka Ooltah Chashmah</em> (TMKOC). In the show, there was a character who was often referred to as 
                                <span> </span>
                                <a
                                    href="https://www.hindwidictionary.com/search?keyword=%E0%A4%AD%E0%A4%BE%E0%A4%AF%E0%A4%BE"
                                    target="_blank"
                                    className="hover:text-[#e67e22] transition-colors"
                                >
                                    <abbr title="Bhaya Meaning in Hindi">Bhaya</abbr>
                                </a>. Inspired by that, my friends and I started calling each other "Bhaya Ji" as a joke.  
                                Since I was the oldest in the group, the name stuck with me more than anyone else. Over time, "Bhaya" became my identity, and it’s how everyone started addressing me.  
                                <br />
                                To keep this memory alive, I decided to take the domain name 
                                <span> </span>
                                <strong className="text-[#e74c3c]">
                                    <a href="https://bhaya.tech/">bhaya.tech</a>
                                </strong>. It’s my way of cherishing those unforgettable college days and the bond I share with my friends.
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* Second Section */}
            <div>
                <div className="flex md:flex-nowrap flex-wrap items-center space-x-8">
                    <div className="w-full sm:w-1/2 mt-8 sm:mt-0">
                        <h1
                            style={{ fontFamily: "Spicy Rice" }}
                            className="text-5xl text-center font-bold text-[#2c3e50] mb-6"
                        >
                            What do I like?
                        </h1>
                        <div className="pt-6">
                            <h3 className='text-2xl text-[#7f8c8d] leading-relaxed'>
                                I have a keen interest in anime and manga; they are my favorite pastime.  
                                Alongside, I love playing badminton, but when it comes to sports, I am an Indian boy whose heart beats for cricket.  
                                I also watch F1, and as a Ferrari fan, I can proudly say, "The race is not just a race; it’s a passion."  
                                I am also a chess lover and a big fan of Hikaru Nakamura and Magnus Carlsen.  
                                These are the things that I enjoy doing in my free time, and I would love to have a conversation with you about these topics.
                            </h3>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2">
                        <img src="Chess.jpg" className='w-full h-auto rounded-lg shadow-lg' alt="Hobbies Image" />
                    </div>
                </div>
            </div>

            {/* Third Section */}
            <div>
                <div className="flex md:flex-nowrap flex-wrap items-center space-x-8 pb-7 pt-7">
                    <div className="w-full sm:w-1/2">
                        <img src="SeedheMaut.jpeg" className='w-full h-auto rounded-lg shadow-lg' alt="Dreams Image" />
                    </div>
                    <div className="w-full sm:w-1/2 mt-8 sm:mt-0">
                        <h1
                            style={{ fontFamily: "Spicy Rice" }}
                            className="text-5xl text-center font-bold text-[#2c3e50] mb-6"
                        >
                            What are your dreams for the future?
                        </h1>
                        <div className="pt-6">
                            <h3 className='text-2xl text-[#7f8c8d] leading-relaxed'>
                            The dreams I have for the future are simple. As a tech enthusiast, I dream of contributing to impactful open-source projects, collaborating with talented developers worldwide, and making meaningful contributions that improve the lives of others. I want to attend live concerts of my favorite artists: Seedhe Maut, Karma, KR$NA, Diljit Dosanjh, Young Stunners, and Atif Aslam with a huge crowd. I want to travel to Japan to experience the culture my anime and manga are based on. I also want to visit Maranello to see the Ferrari factory. Finally, I dream of meeting Messi in person.
                            <br />
                            <br />
                           <span className='text-black'> "The future belongs to those who believe in the beauty of their dreams."</span>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bhaya;
