import logo from '@/assets/logo.svg';
import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
    return (
        <footer className='bg-black text-[#BCBCBC] text-sm py-10 text-center'>
            <div>
                <div className="inline-flex relative before:w-full before:content-[''] before:top-2 before:bottom-0 before:blur before:bg-[linear-gradient(to_right,#FFDD9B,#2FD8FE,#df4e4e,#5b0303,#FFDD9B)] before:absolute">
                    <Image className='relative' src={logo} alt="Zora Technologies Inc." width={45} height={45} />
                </div>
                <nav className='flex flex-col gap-6 mt-6 md:flex-row md:justify-center'>
                    <Link className=' hover:text-white transition-all' href="/">Home</Link>
                    <Link className=' hover:text-white transition-all' href="/services">Services</Link>
                    <Link className=' hover:text-white transition-all' href="/about">About</Link>
                    <Link className=' hover:text-white transition-all' href="/contact">Contact</Link>
                </nav>
                <p className='mt-6'>
                    &copy; 2024 Zora Technologies Inc. All rights reserved.
                </p>
            </div>
        </footer >
    );
}