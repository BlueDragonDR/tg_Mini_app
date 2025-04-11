const Tools = () => {
    return (
        <div className="flex flex-row w-full h-fit pt-[8px] px-[23px] items-center  relative">
            <div className="flex felx-row w-full h-full items-start justify-between font-inter font-semibold text-[11px] leading-[100%] tracking-[0%] uppercase gap-[14px] text-[#FFFFFF]">
                <div className="flex w-full h-full py-[9px] flex-row relative items-center">
                    <div className="bg-[#5E2BBA4D] w-full h-full rounded-[11.2px] pl-[17px] py-[14px] text-left">
                        COLLECTION
                    </div>
                    <img
                        src="./assets/6.png"
                        alt="1"
                        className="w-[48px] h-[61px] absolute right-0"
                    ></img>
                    <img
                        src="./assets/4.png"
                        alt="1"
                        className="w-[38.9px] h-[32px] absolute right-[4px] scale-100 hover:scale-125 transition-transform duration-200"
                    ></img>
                </div>
                <div className="flex w-full h-full py-[9px] flex-row relative items-center">
                    <div className="bg-[#5E2BBA4D] w-full h-full rounded-[11.2px] pr-[17px] py-[14px] text-right">
                        INVENTORY
                    </div>
                    <img
                        src="./assets/6.png"
                        alt="1"
                        className="w-[48px] h-[61px] absolute left-0">
                    </img>
                    <img
                        src="./assets/5.png"
                        alt="1"
                        className="w-[40px] h-[40px] absolute left-[4px] scale-100 hover:scale-125 transition-transform duration-200">
                    </img>
                </div>
            </div>
        </div>
    );
}
export default Tools;