import React from 'react';
import { Link } from 'react-router-dom';

const WallatNav = () => {
    return (
        <div>
            <button className=" px-5 py-2 mr-8 rounded-md "> -- </button>
            <button className=" px-5 py-2 mr-8 rounded-md bg-[#FCEEF8] border-[1px] border-[#CB0881]">Spot</button>
            <Link to='/wallet/funding'>   <button className=" px-5 py-2 mr-8 rounded-md bg-[#f1f1f1]">Funding</button></Link>
            <button className=" px-5 py-2 mr-8 rounded-md bg-[#CB084B] text-white">OTS P2P</button>
            <button className=" px-5 py-2 mr-8 rounded-md bg-[#000] text-white">Rewards</button>
        </div>
    );
};

export default WallatNav;