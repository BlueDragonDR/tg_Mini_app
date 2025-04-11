const Level = () => {
    return (
        <div className="flex ">
            <div className="flex h-[41px] w-full pt-[7px] font-medium text-[12px] leading-[100%] tracking-[0%] text-white">
                <div className="flex flex-col px-[57px] w-full h-hit gap-[10px]">
                    <div className="flex flex-row justify-between items-center ">
                        <div>Daily Traning</div>
                        <div>Tap your Taitiko</div>
                    </div>
                    <div className="flex w-full min-h-[16px] rounded-[100px] bg-[#280B5D24] ">
                    </div>
                </div>
                <div className="absolute left-[26px] top-[188px]">
                    Lvl 1
                </div>
            </div>
        </div>
    );
}
export default Level;