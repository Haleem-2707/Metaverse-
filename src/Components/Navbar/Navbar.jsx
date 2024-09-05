import React from 'react';
import logo from "../../assets/logo.png";
import { HiMenuAlt1 } from 'react-icons/hi';
import {HiMenuAlt3} from "react-icons/hi";
import DarkMode from "../../Components/Navbar/DarkMode"


const NavLinks = [ 
    {
        id: 1,
        name: "Home",
        link: "#",
    },
    {
        id: 2,
        name: "Products",
        link: "#",
    },
    {
        id: 3,
        name: "Pricing",
        link: "#",
    },
    {
        id: 4,
        name: "Contact",
        link: "#",
    }
]

export default function Navbar() {

    const [showMenu, setShowMenu] = React.useState(false);
     const toggleMenu = () => setShowMenu(!showMenu);
    return (
   <div className='text-black dark:text-white duration-300'>
    <div className='container py-2 md:py-0'>
        <div className="flex justify-between items-center">
            {/* Logo Section */}
            <div className="flex items-center gap-3">
                <img src={logo} alt="" className="h-16" />
                <p className="text-3xl">VR <span className="font-bold">World</span></p>
            </div>
           

            {/* Desktop Menu Section */}
          
               <nav className='hidden md:block'>
                <ul className='flex items-center gap-8'>
                    {
                        NavLinks.map(({id, name, link}) => {
                            return (
                                <li key={id} className='py-4'>
                                    <a href={link} className='text-xl font-semibold hover:text-primary py-2
                                    hover:border-b-2
                                    hover:border-secondary
                                    transition-colors duration-500'>{name}</a>

                                </li>
                            );
                        })
                    }
                    {/* Darkmode feature */}
                   <DarkMode/>
                </ul>
               </nav> 

               {/* Mobile view Sidebar  */}
               <div className='md:hidden block'>

                <div className='flex items-center gap-4'>

                <DarkMode/>
                {
                   showMenu ? ( <HiMenuAlt1 
                    onClick={toggleMenu}
                    className="cursor-pointer" size={30}/>) : 
                   (<HiMenuAlt3
                    onClick={toggleMenu}
                    className='cursor-pointer' size="30"/>
                )}
                </div>
              
               </div>
            </div>
        </div>
    </div>
  
      
  
  )
}
