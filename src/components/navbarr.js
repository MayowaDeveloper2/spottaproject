import React from 'react';
import spotta from '../assets/spottalogo.svg';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import spottaim from "../assets/spotta.avif";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
//import Noreview from './Noreview';
import AllReview from './allreviews';
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";


const Navbarr = () => {
    const categories = ["Schools", "Hospitals", "Resort Park", "Shopping malls", "Airport", "Train Station", "Nightlife", "Public Wifi", "Parking Lot", "Security", "Public Transport", "Bus Station", "Quiet"];


    return (
        <>
            <div className='fixed top-0 h-[196px] w-full bg-customlightBlue -50 flex'>
                <div className='relative flex flex-row'>
                    <img style={{width: "92px", height: "29px"}} className='ml-24 mt-5' src={spotta} alt=""/>
                </div>
                <div className='ml-10 mt-4 flex flex-row'>
                    <form className='w-full'>
                        <div className='relative'>
                            <div className='absolute inset-y-0 left-0 flex items-center ps-3 pointer-events-none'>
                                <SearchIcon />
                            </div>
                            <input style={{width: "778px"}} type='search' className='w-full ps-10 px-3 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none' placeholder='Bonny and Clyde Street, Ajao Estate, Lagos' />
                            <div className='absolute right-0 flex items-center inset-y-0 pe-3'>
                                <CloseIcon />
                            </div>
                        </div>
                    </form>
                </div>
                <div className='flex mt-5 justify-end ml-80'>
                    <span className='text-black mr-1'>Welcome!</span>
                    <img className='h-6 w-6 rounded-full' src={spottaim} alt=""/>
                </div>
                <section className='absolute left-24 top-16'>
                  <div className='grid grid-cols-2'> 
                   <div className='flex flex-col'>
                    <div className='text-[24px]'>Bonny and Clyde Street, Ajao Estate, Lagos</div>
                    <div className='font-bold'>"0" Reviews</div>
                   </div>
                   <div className='flex flex-row absolute right-0 '>
                     <button className='bg-customBlue text-[12px] mt-3 text-white rounded-md px-10 h-10 mr-3'>LEAVE A REVIEW</button>
                     <button className='border h-10 items-center mt-3 outline-1 outline flex justify-center  outline-customBlue px-3 py-2 rounded-md mr-3'><BookmarkBorderOutlinedIcon className='object-center outline-1 text-customBlue'/></button>
                     <button className='border h-10 items-center mt-3 outline-1 outline flex justify-center  outline-customBlue px-3 py-2 rounded-md'><ShareOutlinedIcon className='object-center outline-1 text-customBlue'/></button>
                   </div> 
                  </div>  
                    <div className='mt-6 flex '>
                        <div  >
                            <div className="flex">
                                {categories.map((category, index) => (
                                    <div key={index} className={` ${index !== 0 ? 'ml-4' : ''}`}>
                                        <button className={`bg-white  text-black text-[15px] px-2 rounded-md py-1`}>{category}</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button className='bg-white rounded-full ml-3 h-8 w-8 '>
                            <KeyboardArrowRightIcon className='' />
                        </button>
                    </div>
                </section>
            </div>
            <div className='' >
              <AllReview />
            </div>
        </>
    );
}

export default Navbarr;
