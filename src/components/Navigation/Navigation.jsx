import React, { useState } from "react";
import { AccountIcon } from "../common/Account";
import { CartIcon } from "../common/Cart";
import { WishList } from "../common/WishList";

const Navigation = () => {
    const [darkMode, setDarkMode] = useState(false);

    function toggleDarkMode() {
        var element = document.body;
        element.classList.toggle("dark-mode");
        setDarkMode(!darkMode);
    }

    return (
        <>
            <nav className="flex items-center py-6 px-16 justify-between gap-40 bg-white shadow-md"> {/* Added shadow for better visibility */}
                <div className="flex items-center">
                    <h1 className="flex text-gray-800">ZSHOP</h1>
                </div>

                <div className="flex flex-wrap items-center gap-10">
                    <ul className="flex gap-14 text-gray-600 hover:text-black">
                        <li><a href="/">New In</a></li>
                        <li><a href="/women">Women</a></li>
                        <li><a href="/men">Men</a></li>
                        <li><a href="/Kids">Kids</a></li>
                    </ul>
                </div>

                <div className="flex justify-center">
                    <div className="border rounded flex overflow-hidden">
                        <button className="flex items-center justify-center px-4 border-l">
                            <svg className="h-4 w-4 text-grey-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                            </svg>
                            <input type="text" className="px-4 py-2 outline-none" placeholder="Search" />
                        </button>
                    </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                    <ul className="flex gap-8">
                        <li><button><WishList /></button></li>
                        <li><button><AccountIcon /></button></li>
                        <li><a href="/cart-items"><CartIcon /></a></li>
                    </ul>
                </div>

                <div className="ml-4">
                    <button
                        onClick={toggleDarkMode}
                        className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-black dark:text-white"
                    >
                        {darkMode ? '🌙 Dark' : '☀️ Light'}
                    </button>
                </div>
            </nav>

            <div className="flex items-center justify-center h-[72px] bg-white"> 
                <img src="/src/assets/IMG/image.png" alt="" className="h-full object-cover" />
            </div>
        </>
    );
}

export default Navigation;
