import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[var(--dark-grey)] py-6">
            <div className="container mx-auto text-center">
                <nav className="mb-4">
                    {/* Modify flex-direction for 420px */}
                    <div className='mb-2'>
                        <ul className="flex flex-col custom-520:flex-row justify-center items-center space-y-4 custom-520:space-y-0 custom-520:space-x-4">
                            <li className="flex items-center">
                                <Link href="/" className="text-gray-300 hover:text-white transition duration-300">
                                    Home
                                </Link>
                            </li>
                            <li className="text-white mx-2 hidden custom-520:inline">|</li>
                            <li className="flex items-center">
                                <Link href="/pricing" className="text-gray-300 hover:text-white transition duration-300">
                                    Pricing
                                </Link>
                            </li>
                            <li className="text-white mx-2 hidden custom-520:inline">|</li>
                            <li className="flex items-center">
                                <Link href="/pricing" className="text-gray-300 hover:text-white transition duration-300">
                                    Appointments
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <p className="text-white">&copy; 2024 Art Ecommerce, LLC.</p>
            </div>
        </footer>
    );
};

export default Footer;
