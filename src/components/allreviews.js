import React from 'react';
import mayowa from '../assets/mayowa.jpg';
import StarIcon from '@mui/icons-material/Star';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import newyork1 from "../assets/newyork1.avif";
import newyork2 from "../assets/newyork2.avif";
import newyork3 from "../assets/newyork3.avif";

const AllReview = () => {
    return (
        <div className='flex-col grid grid-cols-1 md:grid-cols-3 mt-6 md:ml-24'>
            <div className='col-span-1 md:col-span-2 relative'>
               <div className='md:max-w-[722px] mx-4 '>
                <div className='flex flex-row'>
                    <img className="w-6 h-6 rounded-full" src={mayowa} alt="" />
                    <div className='ml-3'>James T.</div>
                    <div className='ml-3 text-[13px] items-center inline-flex'>5 months ago</div>
                    <span className='absolute right-0 mx-4 md:right-[208px] top-0'><StarIcon style={{ fontSize: '10px', color: "#ecc94b"}}  /> 4.0</span>
                </div>
                <div className='w-full mt-4 text-justify text-[14px]'>
                    There is no stable electricity. The roads are fairly good and there is a sense of community. The
                    drainage system is poor and most residents litter their surroundings. There are several grocery stores and Supermarkets.
                </div>
                <div className='mx-auto flex flex-row'>
                    <span className='inline-block mr-2 text-customDarkBlue'><ThumbUpIcon  style={{fontSize: "14px", color: "#0D2159"}} /> 1224</span>
                    <span className='inline-block mr-8 text-customDarkBlue'><ThumbDownAltIcon  style={{fontSize: "14px", color: "#0D2159"}} /> 4</span>
                    <span className='inline-block text-customDarkBlue'><ChatBubbleIcon  style={{fontSize: "14px", color: "#0D2159"}} /> 24</span>
                </div>
                <div className='mt-4'>
                    <hr className='w-full border-t border-gray-300' />
                </div>
              </div>  
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 md:mr-24 mx-auto mt-4 md:mt-0 md:col-span-1'>
                <img className='w-full h-auto' src={newyork1} alt="" />
                <img className='w-full h-auto' src={newyork2} alt="" />
                <img className='w-full h-auto' src={newyork3} alt="" />
                <img className='w-full h-auto' src={newyork3} alt="" />
            </div>
        </div>
    );
}

export default AllReview;
