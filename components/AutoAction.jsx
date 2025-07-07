import Link from "next/link";

const AutoAction = () => {
    return ( 
        <>
        <div className="h-max w-full bg-lightBlue flex items-start rounded p-2 border-l-4 mt-10 border-green-500">
            <div className="h-full w-[10%] flex justify-center">
                <i className="fa fa-bolt text-yellow-400 text-2xl"></i>
            </div>
            <div className="h-full w-[90%]">
                <h2 className="text-base font-bold text-offBlack"><span className="text-danger">HOT<i className="fa fa-fire text-orange-500 mx-2"></i></span> Auto Auction <span><i className="fa fa-rocket text-green-500"></i></span></h2>
                <p className="text-sm my-2">Let the system auction for you while you relax! <Link href={"/"} className="text-accent2 underline">Learn More</Link></p>
                <p className="text-sm"><span>NEW</span> Each time you purchase coin, you get 1 free auto auction slot (<span className="text-grey text-xs">0 slot available</span>)</p>
            </div>
        </div>
        </> 
    );
}
 
export default AutoAction;