import React from 'react';
import photo2 from '../images/dog2.jpg';
import photo3 from '../images/dog3.jpg';
import photo4 from '../images/dog4.jpg';
import photo5 from '../images/dog5.jpg';
import photo6 from '../images/dog6.jpg';
import photo7 from '../images/dog7.jpg';

export const Carousel = () => (
    <div className="grid-cols-3 p-20 mt-4 bg-base-200 rounded-lg space-y-2 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
        <div className="w-full">
            <img src={photo2} alt="dog2" className="rounded-lg" />
        </div>
        <div className="w-full col-span-2 row-span-2 rounded">
            <img src={photo3} alt="dog3" className="rounded-lg" />
        </div>
        <div className="w-full">
            <img src={photo4} alt="dog4" className="rounded-lg" />
        </div>
        <div className="w-full">
            <img src={photo5} alt="dog5" className="rounded-lg" />
        </div>
        <div className="w-full ">
            <img src={photo6} alt="dog6" className="rounded-lg" />
        </div>
        <div className="w-full">
            <img src={photo7} alt="dog7" className="rounded-lg" />
        </div>
    </div>
)