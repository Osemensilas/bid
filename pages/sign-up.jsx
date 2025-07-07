import Link from "next/link";

const SignUp = () => {
    return ( 
        <>
        <section id="dashboard" className="h-full w-full px-2 sm:px-10">
            {/*<header className="h-20 w-full flex items-center justify-start">
                <h2 className="text-accent font-bold text-3xl">Change Password</h2>
            </header>*/}
            <div className="h-max w-full py-10 flex justify-center">
                <form action="/" className="w-[350px]">
                    <header className="mb-3">
                        <h2 className="text-accent text-3xl font-bold">Sign Up</h2>
                    </header>
                    <div id="error" className="text-danger text-sm my-2">Invalid Password</div>
                    <div className="h-max w-full">
                        <div className="h-max w-full">
                            <label htmlFor="sponsor" className="text-accent text-semibold mb-3">Sponsor Code (Optional)</label>
                            <input type="text" id="sponsor" className="h-[40px] w-full px-2 rounded outline-none border border-grey mb-3" placeholder="" />
                        </div>
                        <div className="h-max w-full">
                            <label htmlFor="email" className="text-accent text-semibold mb-3">Email</label>
                            <input type="text" id="email" className="h-[40px] w-full px-2 rounded outline-none border border-grey mb-3" placeholder="" />
                        </div>
                        <div className="h-max w-full">
                            <label htmlFor="phone" className="text-accent text-semibold mb-3">Phone No.</label>
                            <input type="text" id="phone" className="h-[40px] w-full px-2 rounded outline-none border border-grey mb-3" placeholder="" />
                        </div>
                        <div className="h-max w-full">
                            <label htmlFor="username" className="text-accent text-semibold mb-3">Username</label>
                            <input type="text" id="username" className="h-[40px] w-full px-2 rounded outline-none border border-grey mb-3" placeholder="" />
                        </div>
                        <div className="h-max w-full">
                            <label htmlFor="firstname" className="text-accent text-semibold mb-3">First Name</label>
                            <input type="text" id="firstname" className="h-[40px] w-full px-2 rounded outline-none border border-grey mb-3" placeholder="" />
                        </div>
                        <div className="h-max w-full">
                            <label htmlFor="lastname" className="text-accent text-semibold mb-3">Last Name (Surname)</label>
                            <input type="text" id="lastname" className="h-[40px] w-full px-2 rounded outline-none border border-grey mb-3" placeholder="" />
                        </div>
                        <div className="h-max w-full">
                            <label htmlFor="username" className="text-accent text-semibold mb-3">Email or Username</label>
                            <input type="text" id="username" className="h-[40px] w-full px-2 rounded outline-none border border-grey mb-3" placeholder="" />
                        </div>
                        <div className="h-max w-full">
                            <label htmlFor="username" className="text-accent text-semibold mb-3">State</label>
                            <select name="state" id="username" className="h-[40px] w-full px-2 rounded outline-none border border-grey mb-3">
                                <option value="">-- Select State --</option>
                                <option value="abia">Abia</option>
                                <option value="adamawa">Adamawa</option>
                                <option value="akwa_ibom">Akwa Ibom</option>
                                <option value="anambra">Anambra</option>
                                <option value="bauchi">Bauchi</option>
                                <option value="bayelsa">Bayelsa</option>
                                <option value="benue">Benue</option>
                                <option value="borno">Borno</option>
                                <option value="cross_river">Cross River</option>
                                <option value="delta">Delta</option>
                                <option value="ebonyi">Ebonyi</option>
                                <option value="edo">Edo</option>
                                <option value="ekiti">Ekiti</option>
                                <option value="enugu">Enugu</option>
                                <option value="gombe">Gombe</option>
                                <option value="imo">Imo</option>
                                <option value="jigawa">Jigawa</option>
                                <option value="kaduna">Kaduna</option>
                                <option value="kano">Kano</option>
                                <option value="katsina">Katsina</option>
                                <option value="kebbi">Kebbi</option>
                                <option value="kogi">Kogi</option>
                                <option value="kwara">Kwara</option>
                                <option value="lagos">Lagos</option>
                                <option value="nasarawa">Nasarawa</option>
                                <option value="niger">Niger</option>
                                <option value="ogun">Ogun</option>
                                <option value="ondo">Ondo</option>
                                <option value="osun">Osun</option>
                                <option value="oyo">Oyo</option>
                                <option value="plateau">Plateau</option>
                                <option value="rivers">Rivers</option>
                                <option value="sokoto">Sokoto</option>
                                <option value="taraba">Taraba</option>
                                <option value="yobe">Yobe</option>
                                <option value="zamfara">Zamfara</option>
                                <option value="fct">FCT (Abuja)</option>
                            </select>
                        </div>
                        <div className="h-max w-full">
                            <label htmlFor="password" className="text-accent text-semibold mb-3">Password</label>
                            <input type="password" id="password" className="h-[40px] w-full px-2 rounded outline-none border border-grey mb-3" placeholder="" />
                        </div>
                        <div className="h-max w-full">
                            <label htmlFor="confirm-password" className="text-accent text-semibold mb-3">Confirm Password</label>
                            <input type="password" id="confirm-password" className="h-[40px] w-full px-2 rounded outline-none border border-grey mb-3" placeholder="" />
                        </div>
                    </div>
                    <div className="text-accent mt-2">
                    Alreay have an account? <Link href="/" className="underline text-grey hover:text-accent transition-all duration-300">Sign In</Link>
                    </div>
                    <div className="py-5 w-full">
                        <button type="submit" className="py-2 px-2 bg-green-500 rounded text-accent">Sign In</button>
                    </div>
                </form>
            </div>
        </section>
        </>
     );
}
 
export default SignUp;