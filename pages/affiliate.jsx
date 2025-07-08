const Affiliate = () => {
    return ( 
        <>
        <section id="dashboard" className="h-full w-[90%] sm:w-full px-2 sm:px-10">
            <header className="h-20 w-full flex items-center justify-start">
                <h2 className="text-accent font-bold text-3xl">Affiliate</h2>
            </header>
            <div className="h-max w-full bg-accent rounded p-3 flex flex-col items-center justify-center">
                <h2 className="font-semibold text-base text-gray-600 mb-2">Your Referral Link is:</h2>
                <div className="h-max w-max flex items-center mb-2">
                    <p className="bg-grey text-xs sm:text-sm rounded py-1 px-3 mr-3">https://Vicbidders.com/invite/TY9122EJ</p>
                    <button className="py-1 px-3 bg-primary rounded">
                        <i className="fa fa-copy text-accent"></i>
                    </button>
                </div>
                <p className="text-sm mb-2">You were referred by <span className="font-semibold">Udoka Odinaka Okpara</span></p>
                <p className="text-sm mb-2">Reffer a friend and get your Referral Bonus</p>
            </div>
        </section>
        </>
     );
}
 
export default Affiliate;