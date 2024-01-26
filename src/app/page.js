//Home Page

import PostCard from '@/components/client-user/post-card/port-card';
import ScrollButton from '@/components/client-user/scroll-button/scroll-button';

export default function Home() {
    return (
        <div className=" flex justify-center">
            <div className="sm:mt-20 mt-16 w-full xl:max-w-screen-xl">
                <div>
                    <h2>Bài đăng gần đây</h2>
                    <div className="list-posts w-full p-2">
                        <PostCard />
                        <PostCard />
                        <PostCard />
                        <PostCard />
                        <PostCard />
                        <PostCard />
                    </div>
                </div>
            </div>
            <ScrollButton />
        </div>
    );
}
