import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Smartphone, Apple, Twitter } from 'lucide-react';
import logo from '@/public/images/logo.png';
import Link from 'next/link'
import { footer } from '@/script/data';

const Footer = () => {
    return (
        <footer className="w-full bg-primary-dark rounded-t-3xl h-fit p-5">
            <div className="max-w-7xl mx-auto">
                <div className='flex flex-col md:flex-row justify-between items-center mb-10 text-center md:text-left'>
                    {/* <Image src={img} alt="img" className='w-32' /> */}
                    {/* <h1 className="text-2xl md:text-3xl text-light font-semibold capitalize mt-4 md:mt-0">Job well-done.</h1> */}
                </div>

                <div className='text-light grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 mb-10 gap-y-8 space-y-6'>
                    <div className=' col-span-2 flex flex-col items-center justify-start sm:items-start sm:justify-between sm:pr-5'>
                        <img src={logo.src} alt="footer logo" className='w-48 mb-3' />
                        <p className='text-slate-200 text-center sm:text-justify text-sm pr-0 sm:pr-10 font-body'>
                            Invest Wisely operates as an independent insurance advisory service. Insurance is subject to policy terms, conditions, and insurer approval. Please read all documents carefully before investing.

                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Services</h3>
                        <ul className="flex flex-col gap-2 text-sm">
                            <Link href={'/services'} className="hover:text-gray-300 cursor-pointer">Life Insurance</Link>
                            <Link href={'/services'} className="hover:text-gray-300 cursor-pointer">Health Insurance</Link>
                            <Link href={'/services'} className="hover:text-gray-300 cursor-pointer">Car Insurance</Link>
                            <Link href={'/services'} className="hover:text-gray-300 cursor-pointer">General Insurance</Link>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Company</h3>
                        <ul className="flex flex-col gap-2 text-sm">
                            <Link href={'/about'} className="hover:text-gray-300 cursor-pointer">About Us</Link>
                            <Link href={'/#contact'} className="hover:text-gray-300 cursor-pointer">Contact Us</Link>
                            <Link href={'/privacypolicy'} className="hover:text-gray-300 cursor-pointer">Award and Recognition</Link>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Resources</h3>
                        <ul className="flex flex-col gap-2 text-sm">
                            <li className="hover:text-gray-300 cursor-pointer">For Call Support</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contacts</h3>
                        <ul className="flex flex-col gap-2 text-sm">
                            <li className="hover:text-gray-300 cursor-pointer">{footer.phone}</li>
                            <li className="hover:text-gray-300 cursor-pointer">{footer.email}</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='border-t-2 max-w-7xl mx-auto border-gray-200 py-5 flex flex-col md:flex-row justify-between items-center'>
                <p className='text-light text-sm mb-3 sm:mb-0'>{footer.companycopiright}</p>
                <ul className='flex gap-2'>
                    <li><a href={footer.socialMedia.facebook} target='_blank'><Facebook size={20} className='text-light'/></a></li>
                    <li><a href={footer.socialMedia.instagram} target='_blank'><Instagram size={20} className='text-light' /></a></li>
                    <li><a href={footer.socialMedia.linkedin} target='_blank'><Linkedin size={20} className='text-light' /></a></li>
                    <li><a href={footer.socialMedia.twitter} target='_blank'><Twitter size={20}  className='text-light'/></a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
