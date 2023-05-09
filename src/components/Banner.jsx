import React, {useState} from "react";
import {HiArrowRight, HiArrowLeft} from "react-icons/hi";

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        "https://www.adorama.com/images/cms/39717Hero-Sony-Spring-_31124.jpg",
        "https://www.adorama.com/images/cms/39717GoPro_Price_Drop-Hero-Desktop_74335.jpg",
        "https://www.adorama.com/images/cms/24411Apple-2022-Brand-Header-Desktop_85941.png",
        "https://www.adorama.com/images/cms/39717ARRI-SkyPanels-Discount-Hero-Desktop@2x_41291.jpg",
    ];
    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
    };
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
    };
    return (
        <div className="w-full h-auto overflow-x-hidden ">
            <div className="h-[400px] lg:h-[550px] xl:h-[650px] 2xl:h-[750px] w-screen relative">
                <div
                    style={{transform: `translateX(-${currentSlide * 100}vw)`}}
                    className="w-[400vw] h-full flex transition-transform duration-1000"
                >
                    <img
                        className="w-screen h-full object-cover"
                        src={data[0]}
                        alt="ImageOne"
                        loading="priority"
                    />
                    <img
                        className="w-screen h-full object-cover"
                        src={data[1]}
                        alt="ImageTwo"
                    />
                    <img
                        className="w-screen h-full object-cover"
                        src={data[2]}
                        alt="ImageThree"
                    />
                    <img
                        className="w-screen h-full object-cover"
                        src={data[3]}
                        alt="ImageFour"
                    />
                </div>
                <div
                    className="absolute -my-10  w-full lg:w-[80%] xl:w-[70%] 2xl:w-[60%] left-0 right-0 mx-auto flex justify-center gap-x-40 bottom-12 lg:bottom-24 xl:bottom-32 2xl:bottom-40">
                    <div
                        onClick={prevSlide}
                        className="w-14 h-12 border-[1px] text-[#b300b0] border-[#b300b0] flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
                    >
                        <HiArrowLeft/>
                    </div>
                    <div
                        onClick={nextSlide}
                        className="w-14 h-12 border-[1px] text-[#b300b0] border-[#b300b0] flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
                    >
                        <HiArrowRight/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
