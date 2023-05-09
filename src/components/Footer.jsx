import React from "react";
import {FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaTiktok} from "react-icons/fa";
import {MdLocationOn} from "react-icons/md";
import {BsPersonFill, BsFile, BsGear} from "react-icons/bs";
import {visa, mastercard, maestro} from "../assets";
import DebugMenu from "./Debug/DebugWindow";

const Footer = () => {
    return (
        <div className="bg-[#80007e] text-[#ffc7fe] py-20 font-titleFont mt-10 sm:px-6 lg:px-8">
            <div
                className="max-w-screen-xl mx-auto grid grid-cols-1 px-8 md:grid-cols-2 lg:grid-cols-4 gap-y-10 md:gap-y-0 md:gap-x-10">
                <div className="flex flex-col gap-7">
                    <h2 className="text-2xl font-semibold text-white">payment</h2>
                    <div className="flex justify-center flex-row">
                        <img className="w-12 h-18 mx-3" src={visa} alt="paymentLogo"/>
                        <img className="w-12 h-18 mx-3" src={mastercard} alt="paymentLogo"/>
                        <img className="w-12 h-18 mx-3" src={maestro} alt="paymentLogo"/>
                    </div>
                    <h2 className="text-2xl font-semibold text-white">our social</h2>
                    <div className="flex justify-center gap-5 text-lg text-gray-400">
                        <FaYoutube className="text-[#ffc7fe] hover:text-[#b300b0] duration-300 cursor-pointer"/>
                        <FaFacebookF className="text-[#ffc7fe] hover:text-[#b300b0]  duration-300 cursor-pointer"/>
                        <FaTwitter className="text-[#ffc7fe] hover:text-[#b300b0]  duration-300 cursor-pointer"/>
                        <FaInstagram className="text-[#ffc7fe] hover:text-[#b300b0]  duration-300 cursor-pointer"/>
                        <FaTiktok className="text-[#ffc7fe] hover:text-[#b300b0]  duration-300 cursor-pointer"/>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-white mb-4">keep in touch with us</h2>
                    <div className="text-base flex flex-col gap-2">
                        <p>23 Kyrylivska St, Kyiv, Ukraine</p>
                        <p>
                            Mobile: <a href="tel:+380 99 65 122">+380 99 65 122</a>
                        </p>
                        <p>
                            Phone: <a href="tel:+380 66 65 122">+380 66 65 122</a>
                        </p>
                        <p>
                            Email: <a href="mailto:contact@mrzvstore.com">contact@mrzvstore.com</a>
                        </p>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-white mb-4">profile</h2>
                    <div className="text-base flex flex-col gap-2">
                        <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <BsPersonFill/>
              </span>
                            profile
                        </p>
                        <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <BsFile/>
              </span>
                            checkout
                        </p>
                        <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <MdLocationOn/>
              </span>
                            tracking order
                        </p>
                        <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <BsGear/>
              </span>
                            support
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    <h2 className="text-2xl font-semibold text-white mb-4">
                        leave your email and we will contact you as soon as possible
                    </h2>
                    <input
                        className="bg-transparent placeholder-[#ffc7fe] border px-4 py-2 text-sm mb-2 md:mb-0 md:mr-2 lg:mr-0 lg:mb-0"
                        type="text"
                        placeholder="e-mail"
                    />
                    <button
                        className="text-sm border text-white border-t-0 hover:bg-[#660065] duration-300 cursor-pointer active:bg-white active:text-black mb-2 md:mb-0 md:mr-2 lg:mr-0 lg:mb-0">
                        send
                    </button>
                    <DebugMenu/>
                </div>
            </div>
        </div>
    );
};

export default Footer;
