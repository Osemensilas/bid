import Link from "next/link";

const NoBid = () => {
    return ( 
        <>
        <div className="p-3 bg-accent min-h-max sm:min-h-max w-full rounded">
            <div className="w-full h-max">
                <p className="text-sm text-accent2 mb-4">No coin available at the monent, come back later</p>
                <Link href={"/"} className="py-2 px-3 text-accent rounded bg-neutralDark mt-10">Auction Forum</Link>
            </div>
        </div>
        </>
     );
}
 
export default NoBid;