import React from 'react';

function Bhaya() {
    return (
        <div className='h-screen w-full p-8 pt-0'>
            <div className='pl-8    py-8' style={{ fontFamily: "revert" }}>
                <h1 className='text-7xl  pb-7' style={{ fontFamily: "Spicy Rice" }}>
                    Just Ask?  
                </h1>
                <h3 className='text-3xl text-[#2c3e50]'>
                    These are a few of the things I would like to discuss <br />
                    apart from all the professional stuff for those who are here for me.
                </h3>
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
                                <a
                                    href="https://www.hindwidictionary.com/search?keyword=%E0%A4%AD%E0%A4%BE%E0%A4%AF%E0%A4%BE"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#e67e22] transition-colors"
                                >
                                    Bhaya
                                </a>.
                                Inspired by that, my friends and I started calling each other "Bhaya Ji" as a joke.
                                Since I was the oldest in the group, the name stuck with me more than anyone else. Over time, "Bhaya" became
                                my identity, and it’s how everyone started addressing me.
                                <br />
                                To keep this memory alive, I decided to take the domain name <strong className="text-[#e74c3c]">
                                    <a href="https://bhaya.tech/">bhaya.tech</a></strong>.
                                It’s my way of cherishing those unforgettable college days and the bond I share with my friends.
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* Second Section */}
            <div>
                <div className="flex md:flex-nowrap flex-wrap items-center space-x-8">
                    <div className="w-full sm:w-1/2">
                        <img src="Chess.jpg" className='w-full h-auto rounded-lg shadow-lg' alt="Hobbies Image" />
                    </div>
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
                </div>
            </div>
        </div>
    );
}

export default Bhaya;
