import Link from "next/link";

const SignIn = () => {
  return ( 
    <>
    <section id="dashboard" className="h-full w-full px-2 sm:px-10">
        {/*<header className="h-20 w-full flex items-center justify-start">
            <h2 className="text-accent font-bold text-3xl">Change Password</h2>
        </header>*/}
        <div className="h-full w-full flex items-center justify-center">
            <form action="/" className="w-[350px]">
                <header className="mb-3">
                    <h2 className="text-accent text-3xl font-bold">Sign In</h2>
                </header>
                <div id="error" className="text-danger text-sm my-2">Invalid Password</div>
                <div className="h-max w-full">
                  <div className="h-max w-full">
                    <label htmlFor="username" className="text-accent text-semibold mb-3">Email or Username</label>
                      <input type="text" id="username" className="h-[40px] w-full px-2 rounded outline-none border border-grey mb-3" placeholder="New Password" />
                  </div>
                  <div className="">
                      <label htmlFor="password" className="text-accent text-semibold mb-3">Password</label>
                      <input type="password" id="password" className="h-[40px] w-full px-2 rounded outline-none border border-grey" placeholder="Confirm Password" />
                  </div>
                </div>
                <div className="text-accent mt-2">
                  Don't have an account? <Link href="/sign-up" className="underline text-grey hover:text-accent transition-all duration-300">Sign Up</Link>
                </div>
                <div className="py-5 w-full">
                    <button type="submit" className="py-2 px-2 bg-green-500 rounded text-accent">Sign In</button>
                </div>
                <Link href={"/"} className="text-grey underline hover:text-accent transition-all duration-300">Forget Password?</Link>
            </form>
        </div>
    </section>
    </>
   );
}
 
export default SignIn;