import React from "react";
import CARD_2 from "../../assets/images/card2.png";

import { LuTrendingDown } from "react-icons/lu";
import { FaRupeeSign } from 'react-icons/fa';

const AuthLayout = ({ children }) => {
    return (
        <div className="flex">
            <div className="w-screen h-screen md:w-[60vw] px-12 pt-9 pb-20 ">
                <h2 className="text-3xl font-extrabold text-indigo-700 mb-6 tracking-tight">MoneyMate 💸</h2>
                {children}
            </div>

            <div className="hidden md:block w-[40vw] h-screen bg-amber-500 shadow-2xl bg-auth-bg-img bg-cover bg-no-repeat bg-center overflow-hidden p-8 relative rounded-l-[50px] border-l-2 border-amber-500 " >
                <div className="w-48 h-48 rounded-[40px] bg-violet-500 absolute -top-7 -right-9"  />
                <div className="w-48 h-48 rounded-[40px] bg-violet-500 absolute -top-7 -left-5"  />
                <div className="w-40 h-50 rounded-[50px] border-[20px] border-fuchsia-600 absolute top-[30%] -right-10 " />
                <div className="w-40 h-40 rounded-[40px] bg-violet-500 absolute -bottom-7 -left-5" />
                <div className="w-40 h-40 rounded-[40px] bg-violet-500 absolute -bottom-7 -right-9" />

            
                <div className="p-4 grid grid-cols-1 z-20 text-black absolute top-9 w-full pr-16  ">
                    
                        <StatsInfoCard
                            icon={<LuTrendingDown />}
                            label="Track Your Income & Expenses"
                            value=" 99***/-"
                            color=""
                            
                        />
                </div>

                <img
                    src={CARD_2}
                    className="w-64 lg:w-[90%] absolute bottom-8 shadow-lg shadow-blue-400/15 rounded-4xl m-2"
                />
            </div>
        </div>
    );
};

export default AuthLayout;

const StatsInfoCard = ({ icon, label, value, color }) => {
    return (
           <div className="flex gap-5 p-4 rounded-3xl  bg-violet-700 border border-amber-700/50 z-10 text-white  ">
            <div
                // The 'color' variable likely dynamically sets the background/text color here
                className={`w-10 h-10 flex items-center justify-center text-[22px] bg-white text-indigo-700 ${color} rounded-full drop-shadow-md`}
            >
                {icon}
            </div>
            <div>
                <h6 className="text-white font-medium mb-0 tracking-wide ">{label}</h6>
                <span className="text-[20px] font-medium flex items-center">
                <FaRupeeSign className="h-4 w-4 mr-0.5" />{value}
                </span>
            </div>
        </div>
    );
};


