import React from 'react';
import profile from '../../assets/icon/profile.png';
import { useNavigate } from 'react-router-dom';

const Affilate = () => {
    const navigate = useNavigate()
    return (
        <div className='container pt-28 relative'>
            <div className='grid md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1'>
                <div className='grid grid-cols-1 justify-center items-start p-10 gap-5'>
                    <div className='bg-bg2 rounded-xl p-8'>
                        <h2 className='text-secondary font-semibold text-2xl'>Direct Referrals</h2>
                        <h1 className='font-extrabold text-5xl'>0</h1>
                    </div>
                    <div className='bg-bg2 rounded-xl p-8'>
                        <h2 className='text-secondary font-semibold text-2xl'>Direct Turnover</h2>
                        <h1 className='font-extrabold text-5xl'>$ 0.00</h1>
                    </div>
                    <button onClick={() => navigate('/affilete-team')}className='bg-bg2 text-start rounded-xl p-8'>
                        <h2 className='text-secondary font-semibold text-2xl'>Team Member</h2>
                        <h1 className='font-extrabold text-5xl'>0</h1>
                    </button>
                    <div className='bg-bg2 rounded-xl p-8'>
                        <h2 className='text-secondary font-semibold text-2xl'>Team Turnover</h2>
                        <h1 className='font-extrabold text-5xl'>$ 0.00</h1>
                    </div>
                </div>

                <div className=" sm:flex sm:justify-between absolute top-20 right-10 p-10 flex flex-row items-center gap-4">
                    <div className="flex-shrink-0">
                        <img className='w-16 h-16 rounded-full' src={profile} alt="Profile" />
                    </div>
                    <div className='sm:block hidden text-right'>
                        <h2 className="text-lg font-semibold">MD Hasan</h2>
                        <p className='text-primary'>Beginner</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Affilate;
