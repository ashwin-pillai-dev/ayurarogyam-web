'use client';
import { Navbar } from 'flowbite-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation'
export default function DefaultNavbar() {
    const pathname = usePathname()
    // console.log(pathname);

    

    return (
        <div className='container mx-auto my-0'>
            <Navbar fluid={true} rounded={true} >
                <Navbar.Brand

                    href="/"
                >

                    <Image height={500} width={130} className="h-32 max-w-full rounded-lg" src="/ayur-arogyam-logo.png" alt="image description" />

                    {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Ayurarogyam
                    </span> */}
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className='text-base'>
                    <Navbar.Link
                        active ={pathname == ''}
                        href="/"

                    >
                        <p className={`text-primary-700 hover:text-primary-500 text-base ${pathname == "/"?' font-bold':''}`}>
                            Home
                        </p>
                    </Navbar.Link>
                    <Navbar.Link

                        href="/About"
                        active ={pathname == "/About"}
                    >
                        <p className={`text-primary-700 hover:text-primary-500 text-base ${pathname == "/About"?' font-bold':''}`}>
                            About us
                        </p>
                    </Navbar.Link>
                    <Navbar.Link href="/Categories" active ={pathname == "/Categories"} className="text-primary-700 hover:text-primary-400">
                        <p className={`text-primary-700 hover:text-primary-500 text-base ${pathname == "/Categories"?' font-bold':''}`}>
                            Products
                        </p>
                    </Navbar.Link>
                    <Navbar.Link active ={pathname == "/Blog"} href="/Blog" >
                        <p className={`text-primary-700 hover:text-primary-500 text-base ${pathname == "/Blog"?' font-bold':''}`}>
                            Blogs
                        </p>
                    </Navbar.Link>
                    <Navbar.Link href="/Contact" active ={pathname == "/Contact"} className={`text-primary-700 hover:text-primary-500 text-base ${pathname == "/Contact"?' font-bold':''}`}>
                        <p className="text-primary-700 hover:text-primary-500 text-base">
                            Contact
                        </p>
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>

        </div>

    )
}


