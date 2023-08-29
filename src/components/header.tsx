import React from "react";
import ThemeButten from "@/components/ThemeButten";
import Image from 'next/image';

const Header = () => {
    return (
        <header className="text-gray-600 body-font bg-background-primary">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a href="/" className="flex title-font font-medium items-center text-primary mb-4 md:mb-0">
                    <Image src="/myLogo.svg" alt="Logo" width={40} height={40} className="text-white p-2 bg-indigo-500 rounded-full" />
                    <span className="ml-3 text-xl">Jakob Dekleva</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a href="/About_me" className="mr-5 hover:text-primary">About me</a>
                    <a href="/Gallery" className="mr-5 hover:text-primary">Gallery</a>
                    <a href="/Projects" className="mr-5 hover:text-primary">Projects</a>
                    <a className="mr-5 hover:text-primary">Something cool</a>
                    <ThemeButten/>
                </nav>
            </div>
        </header>
    );
}

export default Header;