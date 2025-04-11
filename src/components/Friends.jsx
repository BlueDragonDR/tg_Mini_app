const Friends = () => {
    return (
        <div className="flex flex-col items-center gap-[5.5px] absolute right-[0px] top-[348px]">
            <div className="font-semibold text-[7.01px] leading-[100%] tracking-[0%] text-center text-[#fff] uppercase">
                FRIENDS
            </div>
            <div className="flex rounded-tl-[8px] rounded-bl-[8px] roundedr- border-[1.28px] border-[#6544CF] bg-[#5E2BBA80] items-center justify-center p-[6px_17px]">
                <img
                    src="./assets/7.png"
                    alt="1"
                    className="w-full h-full relative"
                ></img>
                <img
                    src="./assets/9.png"
                    alt="1"
                    className="w-full h-full absolute scale-50 hover:scale-75 transition-transform duration-200">
                </img>
            </div>
        </div>
    );
};
export default Friends;
