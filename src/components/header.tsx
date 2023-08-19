import React from "react";
import ThemeButten from "@/components/themeButten";

const Header = () => {
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img  src="/myLogo.svg" alt="Logo" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" />
                    <span className="ml-3 text-xl">Jakob Dekleva</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a className="mr-5 hover:text-gray-900">About me</a>
                    <a className="mr-5 hover:text-gray-900">Gallery</a>
                    <a className="mr-5 hover:text-gray-900">Projects</a>
                    <a className="mr-5 hover:text-gray-900">Something cool</a>
                    <ThemeButten/>
                </nav>
            </div>
        </header>
    );
}
export default Header;