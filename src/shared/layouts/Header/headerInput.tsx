import SearchImg from "../../../assets/images/search.png";

const HeaderInput = () => {
    return (
        <div className="relative">
            <img src={SearchImg} alt="Search"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 " />
            <input
                className="w-[388px] h-[38px] my-[16px] text-[14px] py-[10px] pl-[45px] rounded-[19px] border-none bg-[#F5F6FA] text-[#D5D5D5] hover:border-none"
                type="text"
                placeholder="Search"
            />
        </div>
    )
}
export default HeaderInput;