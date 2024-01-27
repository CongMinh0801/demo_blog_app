'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
    const [tabSelected, setTabSelected] = useState('Bài đăng');
    return (
        <div className="flex justify-center bg-cyan-400 fixed top-0 left-0 shadow-lg w-screen">
            <div className="sm:h-20 h-16 w-full xl:max-w-screen-xl flex justify-between items-center">
                <div className="h-full">
                    <div className="flex justify-between h-full items-center text-white font-semibold text-lg">
                        <button
                            onClick={() => setTabSelected('Bài đăng')}
                            className={`flex justify-center items-center cursor-pointer px-3 sm:px-6 mx-2 h-full border-b-4 transition-all border-cyan-400 text-base sm:text-md ${
                                tabSelected === 'Bài đăng' ? 'border-indigo-400 shadow-inner' : 'border-cyan-400'
                            } hover:border-indigo-400`}
                        >
                            <Link href="/">Bài đăng</Link>
                        </button>
                        <button
                            onClick={() => setTabSelected('Về tôi')}
                            className={`flex justify-center items-center cursor-pointer px-3 sm:px-6 mx-2 h-full border-b-4 transition-all border-cyan-400 text-base sm:text-md ${
                                tabSelected === 'Về tôi' ? 'border-indigo-400 shadow-inner' : 'border-cyan-400'
                            } hover:border-indigo-400`}
                        >
                            <Link href="/">Về tôi</Link>
                        </button>
                    </div>
                </div>
                <div className="font-bold sm:text-5xl text-3xl mr-2 text-white">
                    <Link href="/">My Blog</Link>
                </div>
            </div>
        </div>
    );
}
