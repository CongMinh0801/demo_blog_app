export default function Header() {
    return (
        <div className="flex justify-center bg-cyan-400">
            <div className="h-20 w-full xl:max-w-screen-xl flex justify-between items-center">
                <div className="h-full">
                    <ul className="flex justify-between h-full items-center text-white font-semibold text-lg">
                        <li className="flex justify-center items-center cursor-pointer px-6 box-border h-full border-b-4 border-cyan-400 hover:border-indigo-500">
                            Bài đăng
                        </li>
                        <li className="flex justify-center items-center cursor-pointer px-6 box-border h-full border-b-4 border-cyan-400 hover:border-indigo-500">
                            Về tôi
                        </li>
                    </ul>
                </div>
                <div className="font-bold text-5xl text-white">My Blog</div>
            </div>
        </div>
    );
}
