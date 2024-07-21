import React from 'react'
import { FaCaretDown } from "react-icons/fa";

import { IoPerson } from "react-icons/io5";


const NavLinks = [
    {
        id: 1,
        name: "Home",
        link: "/#"
    },
    {
        id: 2,
        name: "About",
        link: "/#"
    },
    {
        id: 3,
        name: "Contact",
        link: "/#"
    },
];

 const DropdownLinks = [
  {
     id: 1,
     name: "Vegetabels",
     link: "/#"
  },
  {
    id: 2,
    name: "Fruits",
    link: "/#"
 },
 {
  id: 3,
  name: "Grains",
  link: "/#"
},
 ];
const Navbar = ({HandlePopup}) => {

  return (
    <div className='bg-white shadow-md'>
           <div className="container flex justify-between py-4 sm:py-3">
            {/* logo-section */}
            <div className="font-bold text-3xl">Logo</div>
             {/* navlink-section */}
                  <div>
                    <ul className='flex items-center gap-10'>
                        {
                            NavLinks.map(({id , name , link}) => (
                              <li key={id}>
                              
                                <a href={link}
                                className='hidden sm:inline-block
                                hover:text-pink hover:underline  text-xl
                                font-semibold'>{name}</a>{" "}
                              </li>
                            ))   }
                            {/* simple drobdown and links */}
                            <li className='hidden md:block cursor-pointer group
                                    '>
                              <a href="/#"
                              className='inline-block 
                               hover:text-pink hover:underline  text-xl
                                font-semibold'>
                                 <div className=' flex items-center gap-[2px]'>
                                  Categories
                                    <span><FaCaretDown className='group-hover:rotate-180
                                    duration-300'/>
                                      </span>
                                      </div>
                               </a>
                                {/* Drobdwon section */}
                                <div className=' absolute !z-[9999]
                              hidden  group-hover:block w-[200px] p-2
                                bg-white shadow-md pb-3'>
                                  <ul>
                                    {DropdownLinks.map(({id, name, link}) =>(
                                       <li key={id}>
                              
                                       <a href={link}
                                       className='w-full rounded-md
                                       hover:bg-pink/20  p-1 text-xl
                                       font-semibold m-2 '>
                                        {name}
                                        </a>
                                     </li>
                                    ))}
                                  </ul>
                                </div>
                            </li>
                      {/* login button section */}
                           <li>
                            <button
                            onClick={HandlePopup}
                             className='flex justify-center items-center gap-2
                            bg-secondary text-xl h-[40px] text-white px-2
                                  md:px-5 py-2
                            hover:scale-105 duration-300'>
                              <IoPerson/>
                              My Account
                            </button>
                           </li>
                                </ul>
                               </div>
                            </div>
                            </div>
                            
                
           
 

 
  )
}

export default Navbar
