import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Layout = ({children}) => {

    const router = useRouter();
    const currentPath = router.pathname;

    const [userNav, setUserNav] = useState(true);
    const [linkTouched, setLinkTouched] = useState(false);

    const hamClicked = () => {
        if (userNav === true){
            setUserNav(false);
        }else{
            setUserNav(true);
        }
        setLinkTouched(false);
    }

    const linkClicked = () => {
        setLinkTouched(true);
    }

    useEffect(() => {
        if (userNav === true){
            setUserNav(true);
        }else{
            setUserNav(false);
        }

        if (linkTouched === true){
            setUserNav(true);
        }
    },[userNav, linkTouched])

    const [user, setUser] = useState(false);
    const [userFolder, setUserFolder] = useState(false);
    const [userHeader, setUserHeader] = useState(false);

    const userClicked = () => {
        if (userFolder === false){
            setUserFolder(true);
        }else{
            setUserFolder(false);
        }
    }

    useEffect(() => {
        if (user === false){
            setUserHeader(false);
        }else{
            setUserHeader(true);
        }

        if (userFolder === true){
            setUserFolder(true);
        }else{
            setUserFolder(false);
        }
    },[user, userFolder])


    return ( 
        <>
        <Head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="Victorious bidders" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        </Head>
        <div className="h-20 w-screen bg-primary flex">
            <div className="w-[10%] sm:w-[20%] flex items-center justify-center transition-all duration-300">
                <button onClick={hamClicked} className="relative h-10 w-10">
                    <span className="absolute after:absolute before:absolute after:content-[''] before:content-[''] top-[50%] before:top-[6px] after:top-[-6px] left-[50%] before:left-0 after:left-0 -translate-x-[50%] -translate-y-[50%] h-[2px] before:h-[2px] after:h-[2px] w-[30px] before:w-[30px] after:w-[30px] bg-accent before:bg-accent after:bg-accent"></span>
                </button>
            </div>
            <div className="h-full w-[90%] sm:w-[80%] px-2 sm:px-10">
                <header id="header" className="h-full w-full flex items-center justify-between">
            <div className="h-max w-max">
                <h2 className="text-2xl text-accent sm:block hidden">Victorious bidders</h2>
                </div>
                <nav className="h-max w-max">
                    <div id="user-present" className={`h-max w-max items-center
                        ${userHeader ? "flex" : "hidden"}
                        `}>
                        <Link href={"/"} className="ml-5">
                            <i className="fa fa-briefcase text-accent text-2xl"></i>
                        </Link>
                        <Link href={"/"} className="ml-5">
                            <i className="fa fa-exchange text-accent text-2xl"></i>
                        </Link>
                        <Link href={"/"} className="ml-5">
                            <i className="fa fa-whatsapp text-accent text-2xl"></i>
                        </Link>
                        <Link href={"/"} className="ml-5">
                            <i className="fa fa-telegram text-accent text-2xl"></i>
                        </Link>
                        <div className="ml-5 relative h-full w-max flex items-center">
                            <button onClick={userClicked} className="">
                                <i className="fa fa-user text-accent text-2xl"></i>
                                <span className="text-accent ml-2">John Paul</span>
                            </button>
                            <div className={`flex-col rounded absolute top-[55px] left-[-40px] bg-accent shadow-xl h-max min-w-[150px]
                                ${userFolder ? "flex" : "hidden"}
                                `}>
                                <h3 className="mb-3 font-bold px-2 py-1">John Paul</h3>
                                <Link href={"/"} className="h-max w-full bg-transparent hover:bg-grey px-2 py-1 group">
                                    <i className="fa fa-user text-grey mr-2 text-base group-hover:text-accent transition-all duration-300"></i>
                                    <span className="text-sm text-grey group-hover:text-accent transition-all duration-300">Profile</span>
                                </Link>
                                <Link href={"/"} className="h-max w-full bg-transparent hover:bg-grey px-2 py-1 group">
                                    <i className="fa fa-lock text-grey mr-2 text-base group-hover:text-accent transition-all duration-300"></i>
                                    <span className="text-sm text-grey group-hover:text-accent transition-all duration-300">Password</span>
                                </Link>
                                <div className="h-max w-full py-1 border-t-2 flex">
                                    <Link onClick={linkClicked} href={"/"} className="h-max w-full bg-transparent hover:bg-grey px-2 py-1 group">
                                        <i className="fa fa-sign-out text-grey mr-2 text-base group-hover:text-accent transition-all duration-300"></i>
                                        <span className="text-sm text-grey group-hover:text-accent transition-all duration-300">Sign Out</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="user-absent" className={`h-max w-max
                        ${userHeader ? "hidden" : ""}
                        `}>
                        <Link onClick={linkClicked} href={"/"} className="group">
                            <i className="fa fa-user text-accent text-2xl"></i>   
                            <span className="ml-2 text-accent">Sign In</span>
                        </Link>
                    </div>
                </nav>
            </header>
            </div>
        </div>
        <div className={`h-[calc(100vh-80px)] flex
            ${userNav ? "w-screen sm:w-screen" : "w-max sm:w-screen"}
            `}>
            <div className={`h-full bg-accent transition-all duration-300
                ${userNav ? "sm:w-[20%] w-[10%]" : "sm:w-[5%] w-[50%]"}
                `}>
                <nav className="h-max w-full">
                    <ul className="h-max w-full">
                        <li className={`h-12 w-full hover:bg-neutralDark px-[10px] flex items-center group cursor-pointer transition-all duration-300 rounded
                            ${currentPath === "/dashboard" ? "bg-neutralDark text-accent" : ""}
                            `}>
                            <Link onClick={linkClicked} href={"/dashboard"} className="h-full w-full flex items-center">
                                <i className={`fa fa-dashboard group-hover:text-accent mr-2 transition-all duration-300
                                    ${currentPath === "/dashboard" ? "text-accent" : "text-neutralDark"}
                                    `}></i>
                                <span className={`group-hover:text-accent transition-all duration-300
                                    ${userNav ? "sm:block hidden transition-all duration-300" : "sm:hidden block transition-all duration-300"}
                                    ${currentPath === "/dashboard" ? "text-accent" : "text-neutralDark"}
                                    `}>Dashboard</span>
                            </Link>
                        </li>
                        <li className={`h-12 w-full hover:bg-neutralDark px-[10px] flex items-center group cursor-pointer transition-all duration-300 rounded
                            ${currentPath === "/lobby" ? "bg-neutralDark text-accent" : ""}
                            `}>
                            <Link onClick={linkClicked} href={"/lobby"} className="h-full w-full flex items-center">
                                <i className={`fa fa-briefcase group-hover:text-accent mr-2 transition-all duration-300
                                    ${currentPath === "/lobby" ? "text-accent" : "text-neutralDark"}
                                    `}></i>
                                <span className={`group-hover:text-accent transition-all duration-300
                                    ${userNav ? "sm:block hidden transition-all duration-300" : "sm:hidden block transition-all duration-300"}
                                    ${currentPath === "/lobby" ? "text-accent" : "text-neutralDark"}
                                    `}>Action Forum</span>
                            </Link>
                        </li>
                        <li className={`h-12 w-full hover:bg-neutralDark px-[10px] flex items-center group cursor-pointer transition-all duration-300 rounded
                            ${currentPath === "/buy-bid" ? "bg-neutralDark text-accent" : ""}
                            `}>
                            <Link onClick={linkClicked} href={"/buy-bid"} className="h-full w-full flex items-center">
                                <i className={`fa fa-arrow-up group-hover:text-accent mr-2 transition-all duration-300
                                    ${currentPath === "/buy-bid" ? "text-accent" : "text-neutralDark"}
                                    `}></i>
                                <span className={`group-hover:text-accent transition-all duration-300
                                    ${userNav ? "sm:block hidden transition-all duration-300" : "sm:hidden block transition-all duration-300"}
                                    ${currentPath === "/buy-bid" ? "text-accent" : "text-neutralDark"}
                                    `}>Buy Bid</span>
                            </Link>
                        </li>
                        <li className={`h-12 w-full hover:bg-neutralDark px-[10px] flex items-center group cursor-pointer transition-all duration-300 rounded
                            ${currentPath === "/sell-bid" ? "bg-neutralDark text-accent" : ""}
                            `}>
                            <Link onClick={linkClicked} href={"/sell-bid"} className="h-full w-full flex items-center">
                                <i className={`fa fa-arrow-down group-hover:text-accent mr-2 transition-all duration-300
                                    ${currentPath === "/sell-bid" ? "text-accent" : "text-neutralDark"}
                                    `}></i>
                                <span className={`group-hover:text-accent transition-all duration-300
                                    ${userNav ? "sm:block hidden transition-all duration-300" : "sm:hidden block transition-all duration-300"}
                                    ${currentPath === "/sell-bid" ? "text-accent" : "text-neutralDark"}
                                    `}>Sell Bid</span>
                            </Link>
                        </li>
                        <li className={`h-12 w-full hover:bg-neutralDark px-[10px] flex items-center group cursor-pointer transition-all duration-300 rounded
                            ${currentPath === "/transaction" ? "bg-neutralDark text-accent" : ""}
                            `}>
                            <Link onClick={linkClicked} href={"/transaction"} className="h-full w-full flex items-center">
                                <i className={`fa fa-exchange group-hover:text-accent mr-2 transition-all duration-300
                                    ${currentPath === "/transaction" ? "text-accent" : "text-neutralDark"}
                                    `}></i>
                                <span className={`group-hover:text-accent transition-all duration-300
                                    ${userNav ? "sm:block hidden transition-all duration-300" : "sm:hidden block transition-all duration-300"}
                                    ${currentPath === "/transaction" ? "text-accent" : "text-neutralDark"}
                                    `}>Transaction</span>
                            </Link>
                        </li>
                        <li className={`h-12 w-full hover:bg-neutralDark px-[10px] flex items-center group cursor-pointer transition-all duration-300 rounded
                            ${currentPath === "/affiliate" ? "bg-neutralDark text-accent" : ""}
                            `}>
                            <Link onClick={linkClicked} href={"/affiliate"} className="h-full w-full flex items-center">
                                <i className={`fa fa-link group-hover:text-accent mr-2 transition-all duration-300
                                    ${currentPath === "/affiliate" ? "text-accent" : "text-neutralDark"}
                                    `}></i>
                                <span className={`group-hover:text-accent transition-all duration-300
                                    ${userNav ? "sm:block hidden transition-all duration-300" : "sm:hidden block transition-all duration-300"}
                                    ${currentPath === "/affiliate" ? "text-accent" : "text-neutralDark"}
                                    `}>Affiliate</span>
                            </Link>
                        </li>
                        <li className={`h-12 w-full hover:bg-neutralDark px-[10px] flex items-center group cursor-pointer transition-all duration-300 rounded
                            ${currentPath === "/change-password" ? "bg-neutralDark text-accent" : ""}
                            `}>
                            <Link onClick={linkClicked} href={"/change-password"} className="h-full w-full flex items-center">
                                <i className={`fa fa-lock group-hover:text-accent mr-2 transition-all duration-300
                                    ${currentPath === "/change-password" ? "text-accent" : "text-neutralDark"}
                                    `}></i>
                                <span className={`group-hover:text-accent transition-all duration-300
                                    ${userNav ? "sm:block hidden transition-all duration-300" : "sm:hidden block transition-all duration-300"}
                                    ${currentPath === "/change-password" ? "text-accent" : "text-neutralDark"}
                                    `}>Password</span>
                            </Link>
                        </li>
                        <li className={`h-12 w-full hover:bg-neutralDark px-[10px] flex items-center group cursor-pointer transition-all duration-300 rounded
                            ${currentPath === "/support" ? "bg-neutralDark text-accent" : ""}
                            `}>
                            <Link onClick={linkClicked} href={"/support"} className="h-full w-full flex items-center">
                                <i className={`fa fa-support group-hover:text-accent mr-2 transition-all duration-300
                                    ${currentPath === "/support" ? "text-accent" : "text-neutralDark"}
                                    `}></i>
                                <span className={`group-hover:text-accent transition-all duration-300
                                    ${userNav ? "sm:block hidden transition-all duration-300" : "sm:hidden block transition-all duration-300"}
                                    ${currentPath === "/support" ? "text-accent" : "text-neutralDark"}
                                    `}>Support</span>
                            </Link>
                        </li>
                        <li className="h-12 w-full hover:bg-neutralDark px-[10px] flex items-center group cursor-pointer transition-all duration-300 rounded">
                            <Link onClick={linkClicked} href={"/"} className="h-full w-full flex items-center">
                                <i className="fa fa-sign-out text-neutralDark group-hover:text-accent mr-2 transition-all duration-300"></i>
                                <span className={`text-neutralDark group-hover:text-accent transition-all duration-300
                                    ${userNav ? "sm:block hidden transition-all duration-300" : "sm:hidden block transition-all duration-300"}
                                    `}>Sign Out</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <main className="w-[90%] sm:w-[95%] h-full overflow-y-scroll">
                {children}
            </main>
        </div>
        </>
     );
}
 
export default Layout;