import SearchImg from "../../../assets/images/search.png";

const HeaderInput = () => {
    return (
        <div className="relative">
            <img
                src={SearchImg}
                alt="Search"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
            />
            <input
                type="text"
                placeholder="Search"
                className="w-96 h-10 pl-12 rounded-full bg-[#F5F6FA] text-sm text-gray-400 focus:outline-none"
            />
        </div>
    );
};

export default HeaderInput;
