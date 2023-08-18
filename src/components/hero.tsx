import React from "react";
import '../styles/globals.css';

const Hero = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <img src="/ProfilPhoto.png" alt="Profil" className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" />
                    <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Welcome to Jakob's webpage <span className="waving-hand">👋</span>. </h1>
                        <p className="mb-8 leading-relaxed">Hi, my name is Jakob, and this is my webpage. On this page, you can find a little bit about me, some projects I did, and a photo gallery of cool places I traveled to.
                        </p>
                        <p className="mb-8 leading-relaxed">Enjoy your stay and please don't hack me.
                        </p>
                    </div>
            </div>
        </section>
    );
}

export default Hero;