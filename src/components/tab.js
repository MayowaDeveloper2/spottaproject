import React, { useEffect } from 'react';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const categories = [
  "Schools", 
  "Hospitals", 
  "Resort Park", 
  "Shopping malls", 
  "Airport", 
  "Train Station", 
  "Nightlife", 
  "Public Wifi", 
  "Parking Lot", 
  "Security", 
  "Public Transport", 
  "Bus Station", 
  "Quiet"
];

const ListTabs = () => {
  useEffect(() => {
    Swiper.use([Navigation]);

    new Swiper('.swiper-container', {
      modules: [Navigation],
      slidesPerView: '3',
      spaceBetween: 3,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar', 
        hide: true, 
      },
    });
  }, []);

  return (
    <div className="lg:w-[1240px] mx-auto w-[300px] overflow-hidden">
      <div className="relative">
        <div className="swiper-container">
          <div className="swiper-wrapper flex flex-row">
            {categories.map((category, index) => (
              <div key={index} className="swiper-slide mb-2 mr-2" >
                <button
                  className="bg-blue-500 h-[24px] text-[9px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={() => console.log(`Category: ${category}`)}
                  style={{ width: 'auto' }}
                >
                  {category}
                </button>
              </div>
            ))}
          </div>
    
        </div>
      </div>
    </div>
  );
};

export default ListTabs;
