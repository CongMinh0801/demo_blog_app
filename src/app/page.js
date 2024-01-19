//Home Page

import ScrollButton from '@/components/client-user/scroll-button/scroll-button';

export default function Home() {
    return (
        <div className="sm:mt-20 mt-16">
            <div className="h-screen bg-slate-200"></div>
            <div className="h-screen bg-green-200"></div>
            <div className="h-screen bg-red-200"></div>
            <div className="h-screen bg-gray-200"></div>
            <div className="h-screen bg-blue-200"></div>
            <div className="h-screen bg-pink-200"></div>
            <div className="h-screen bg-orange-200"></div>
            <ScrollButton />
        </div>
    );
}
