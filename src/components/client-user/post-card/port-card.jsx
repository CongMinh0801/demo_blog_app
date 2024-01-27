export default function PostCard() {
    return (
        <div className="mt-2 shadow rounded overflow-hidden flex">
            <div className="bg-gray-200"></div>
            <div className="bg-white p-2">
                <h3 className="text-base font-bold text-gray-800">Post Title</h3>
                <p className="text-sm font-medium text-gray-600">Post Decription</p>
            </div>
        </div>
    );
}
