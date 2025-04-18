import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 120 }}
            className="sticky top-0 z-50 backdrop-blur-md py-4 px-6 rounded-lg shadow-lg"
        >
            <div className="flex font-display justify-between items-center mx-auto ml-6 mr-6">
                <div className="logo font-bold font-body text-3xl">IMAGERY</div>

                <button
                    className="md:hidden text-vibrant-orange-400 text-2xl"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    ☰
                </button>

                <nav
                    className={`${
                        isMenuOpen ? 'block' : 'hidden'
                    } md:flex items-center gap-6 absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent p-4 md:p-0 rounded-lg shadow-lg md:shadow-none`}
                >
                    <ul className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 font-medium items-start md:items-center">
                        <li className="border-2 rounded-full px-3 py-1 border-gray-300 hover:px-5 duration-300 ease-in-out hover:bg-black block md:inline">
                            <a href="#bio" className="block md:inline">Bio</a>
                        </li>
                        <li className="border-2 rounded-full px-3 py-1 border-gray-300 hover:px-5 duration-300 ease-in-out hover:bg-black block md:inline">
                            <a href="#portfolio" className="block md:inline">Portfolio</a>
                        </li>
                        <li className="border-2 rounded-full px-3 py-1 border-gray-300 hover:px-5 duration-300 ease-in-out hover:bg-black block md:inline">
                            <a href="#works" className="block md:inline">Works</a>
                        </li>
                        <li className="border-2 rounded-full px-3 py-1 border-gray-300 hover:px-5 duration-300 ease-in-out hover:bg-black block md:inline">
                            <a href="#reach" className="block md:inline">Reach Out</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </motion.header>
    );
}