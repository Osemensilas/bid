const ChangePassword = () => {
    return ( 
        <>
        <section id="dashboard" className="h-full w-full sm:w-full px-2 sm:px-10">
            {/*<header className="h-20 w-full flex items-center justify-start">
                <h2 className="text-accent font-bold text-3xl">Change Password</h2>
            </header>*/}
            <div className="h-full w-full flex items-center justify-center">
                <form action="/" className="w-[350px]">
                    <header className="mb-3">
                        <h2 className="text-accent text-3xl font-bold">Update Password</h2>
                    </header>
                    <div id="error" className="text-danger text-sm my-2">Invalid Password</div>
                    <div className="">
                        <input type="password" className="h-[40px] w-full px-2 rounded outline-none border border-grey mb-3" placeholder="Current Password" />
                        <input type="password" className="h-[40px] w-full px-2 rounded outline-none border border-grey mb-3" placeholder="New Password" />
                        <input type="password" className="h-[40px] w-full px-2 rounded outline-none border border-grey" placeholder="Confirm Password" />
                    </div>
                    <div className="py-5 w-full">
                        <button type="submit" className="py-2 px-2 bg-green-500 rounded text-accent">Change</button>
                    </div>
                </form>
            </div>
        </section>
        </>
     );
}
 
export default ChangePassword;