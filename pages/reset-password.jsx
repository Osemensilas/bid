const ResetPassword = () => {
    return ( 
        <>
        <section id="dashboard" className="h-full w-full px-2 sm:px-10">
            {/*<header className="h-20 w-full flex items-center justify-start">
                <h2 className="text-accent font-bold text-3xl">Change Password</h2>
            </header>*/}
            <div className="h-full w-full flex items-center justify-center">
                <form action="/" className="w-[350px]">
                    <header className="mb-3">
                        <h2 className="text-accent text-3xl font-bold">Reset Password</h2>
                    </header>
                    <div id="error" className="text-danger text-sm my-2">Invalid Password</div>
                    <div className="h-max w-full hidden">
                        <div className="h-max w-full">
                            <div className="h-max w-full">
                                <label htmlFor="email" className="text-accent text-semibold mb-3">Email Address</label>
                                <input type="text" id="email" className="h-[40px] w-full px-2 rounded outline-none border border-grey mb-3" placeholder="" />
                            </div>
                        </div>
                        <div className="py-5 w-full">
                            <button type="submit" className="py-2 px-2 bg-green-500 rounded text-accent">Submit</button>
                        </div>
                    </div>
                    <div className="">
                        <h2 className="text-sm my-2 text-accent">Enter 6-digit code sent to your email address</h2>
                        <div className="w-full h-max flex justify-between">
                            <input type="text" className="h-10 w-10 text-center outline-none border border-grey rounded" />
                            <input type="text" className="h-10 w-10 text-center outline-none border border-grey rounded" />
                            <input type="text" className="h-10 w-10 text-center outline-none border border-grey rounded" />
                            <input type="text" className="h-10 w-10 text-center outline-none border border-grey rounded" />
                            <input type="text" className="h-10 w-10 text-center outline-none border border-grey rounded" />
                            <input type="text" className="h-10 w-10 text-center outline-none border border-grey rounded" />
                        </div>
                        <div className="">
                            <p className="text-sm mt-2 text-accent">
                                Didn't get a code? <button type="button" className="text-primary underline">Resend</button>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </section>
        </>
     );
}
 
export default ResetPassword;