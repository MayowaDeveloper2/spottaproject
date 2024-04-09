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
        <>
            <div className='flex-col grid grid-cols-3 mt-56 ml-24'>
                <div className='col-span-2 relative'>
                    <div className='flex flex-row'>
                        <img className="w-6 h-6 rounded-full" src={mayowa} alt="" />
                        <div className='ml-3'>James T.</div>
                        <div className='ml-3 text-[13px] items-center inline-flex'>5 months ago</div>
                        <span className='absolute right-[235px] top-0'><StarIcon style={{ fontSize: '10px', color: "#ecc94b"}}  /> 4.0</span>
                    </div>
                    <div className='max-w-[722px] mt-4 text-justify text-[14px]'>
                        There is no stable electricity. The roads are fairly good and there is a sense of community. The
                        drainage system is poor and most residents litter their surroundings. There are several grocery stores and Supermarkets.
                    </div>
                    <div className='flex flex-row'>
                      <span className='inline-block mr-2 text-customDarkBlue'><ThumbUpIcon  style={{fontSize: "14px", color: "#0D2159"}} /> 1224</span>
                      <span className='inline-block mr-8 text-customDarkBlue'><ThumbDownAltIcon  style={{fontSize: "14px", color: "#0D2159"}} /> 4</span>
                      <span className='inline-block text-customDarkBlue'><ChatBubbleIcon  style={{fontSize: "14px", color: "#0D2159"}} /> 24</span>

                    </div>
                    <div className='mt-4'>
                      <hr className='w-[722px] border-t border-gray-300' />
                    </div>
                </div>
                <div className='grid grid-cols-2 absolute right-0 gap-3 mr-24'>
                    <img className='w-[235px] h-[224px]' src={newyork1} alt="" />
                    <img className='w-[235px] h-[224px]' src={newyork2} alt="" />
                    <img className='w-[235px] h-[224px]' src={newyork3} alt="" />
                    <img className='w-[235px] h-[224px]' src={newyork3} alt="" />

                </div>
            </div>
        </>
    )
}

export default AllReview;
