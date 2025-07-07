import Link from "next/link";

const Bonus = () => {
    return ( 
        <>
        <div className="h-max w-full flex items-start justify-between px-3 py-2 bg-accent rounded mb-3">
            <div className="h-max w-max">
              <p className="text-base text-offBlack mb-2">Bonus Balance</p>
              <h2 className="text-2xl font-bold text-offBlack mb-3">₦5,000</h2>
              <Link href={"/"} className="py-2 px-3 text-accent rounded bg-neutralDark mt-10">Sell</Link>
            </div>
            <div className="h-max w-max">
              <p className="text-base text-offBlack mb-2">Total Bids</p>
              <p className="px-2 py-1 bg-lightBlue rounded w-max h-max">4</p>
            </div>
            <div className="h-max w-max">
              <p className="text-base text-offBlack mb-2">Total Auctioned</p>
              <h2 className="text-2xl font-bold text-offBlack mb-3 px-2 py-1 bg-lightBlue rounded w-max h-max">₦5,000,000</h2>
            </div>
          </div>
        </>
     );
}
 
export default Bonus;