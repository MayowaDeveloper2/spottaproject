import React, { useState } from 'react';
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import CreateReview from '../components/createreview';

const LocationInfo = () => {
    const [showReviewForm, setShowReviewForm] = useState(false);

    const handleClick = () => {
        setShowReviewForm(!showReviewForm);
    };

    return (
        <div className="lg:h-[135px] h-[175px] flex flex-col w-full items-start justify-start px-[15px] md:px-[100px] bg-[#F2F6FD] gap-4 ">
            <div className="flex flex-col md:flex-row justify-between items-start h-fit w-full gap-3">
                <div className="flex flex-col items-start justify-start w-full md:w-fit gap-3">
                    <h1 className="text-lg md:text-xl lg:text-2xl font-[500] text-[#1E1E1E]">
                        Bonny and Clyde Street, Ajao Estate, Lagos
                    </h1>
                    <p className="text-sm lg:text-base font-[500] text-[#18181B]">
                        <span>"450" Reviews (People are raving about the selected location)</span>
                    </p>
                    <div className="flex flex-row justify-end gap-4 md:absolute md:right-0 md:px-[100px]">
                        
                        <div className='flex flex-row relative'>
                            <button onClick={handleClick} className='bg-customBlue text-[12px] mt-3 text-white rounded-md px-10 h-10 mr-3'>LEAVE A REVIEW</button>
                            <button className='border h-10 items-center mt-3 outline-1 outline flex justify-center  outline-customBlue px-3 py-2 rounded-md mr-3'><BookmarkBorderOutlinedIcon className='object-center outline-1 text-customBlue'/></button>
                            <button className='border h-10 items-center mt-3 outline-1 outline flex justify-center  outline-customBlue px-3 py-2 rounded-md'><ShareOutlinedIcon className='object-center outline-1 text-customBlue'/></button>
                        </div>
                        
                    </div>
                    
                    {showReviewForm && <CreateReview />}
                      
                </div>
            </div>
        </div>
    );
};

export default LocationInfo;
