import { useEffect, useRef, useState } from "react";
import './header.css'
import Logo from '../assets/logo.png'
import Dropdown from "./dropdown";


function Header() {
    const [isSticky, setSticky] = useState(false);

    const headerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {

        window.onscroll = function () { myFunction() };

        const sticky = headerRef.current!.offsetTop;

        function myFunction() {
            if (window.scrollY > sticky) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        }
    }, [])

    return (
        <div ref={headerRef} className={"header " + (isSticky ? "sticky" : "")} id="myHeader">
            <div className="header-left" onClick={() => {
                window.location.href = "/"
            }}>
                <img src={Logo} alt="" className="Logo" />
                <h2 className="header-title">ShiftMate</h2>
            </div>
            <div className="header-right">

                <Dropdown title="Features" onClick={() => {
                    window.location.href = "/#features"
                    window.scrollTo({
                        top: window.scrollY - 100,
                        behavior: "instant"
                    });
                }} links={[
                    {
                        title: "Easy Shift Management",
                        onClick: () => {
                            console.log(window.scrollY);
                            console.log(window.scrollY == 0);
                            const scrollOffset = window.scrollY == 0 ? 200 : 100;
                            window.location.href = "/#shift-management"
                            window.scrollTo({
                                top: window.scrollY - scrollOffset,
                                behavior: "instant"
                            });
                        }
                    },
                    {
                        title: "Syncs To Google Calendar",
                        onClick: () => {
                            const scrollOffset = window.scrollY == 0 ? 200 : 100;

                            window.location.href = "/#syncs-to-google-calendar"
                            //scroll up just a bit
                            window.scrollTo({
                                top: window.scrollY - scrollOffset,
                                behavior: "instant"
                            });
                        }
                    },
                    {
                        title: "Conflict Management",
                        onClick: () => {
                            const scrollOffset = window.scrollY == 0 ? 200 : 100;
                            window.location.href = "/#conflict-management"
                            window.scrollTo({
                                top: window.scrollY - scrollOffset,
                                behavior: "instant"
                            });
                        }
                    },

                    {
                        title: "Seamless Communication",
                        onClick: () => {
                            const scrollOffset = window.scrollY == 0 ? 200 : 100;

                            window.location.href = "/#communication"
                            window.scrollTo({
                                top: window.scrollY - scrollOffset,
                                behavior: "instant"
                            });
                        }
                    },

                ]} />
                <Dropdown title="Contact" onClick={() => {
                    window.location.href = "/#contact"

                }} links={[]}
                />



            </div>

        </div>
    )
}

export default Header