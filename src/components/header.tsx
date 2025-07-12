import { useEffect, useRef, useState } from "react";
import './header.css'
import Logo from '../assets/logo.png'
import Dropdown from "./dropdown";


function Header() {
    const [isSticky, setSticky] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const headerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleScroll = () => {
            if (headerRef.current) {
                const sticky = headerRef.current.offsetTop;
                setSticky(window.scrollY > sticky);
            }
        };

        const handleClickOutside = (event: MouseEvent) => {
            if (isMobileMenuOpen && !(event.target as Element).closest('.mobile-menu') && !(event.target as Element).closest('.hamburger')) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        document.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isMobileMenuOpen]);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            <div ref={headerRef} className={`header ${isSticky ? "sticky" : ""}`} id="myHeader">
                <div className="header-left" onClick={() => {
                    window.location.href = "/"
                }}>
                    <img src={Logo} alt="" className="Logo" />
                    <h2 className="header-title">ShiftMate</h2>
                </div>
                <div className="header-right">
                    {/* Desktop Navigation */}
                    <div className="desktop-nav">
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
                        <Dropdown title="Pricing" onClick={() => {
                            window.location.href = "/#pricing"
                        }} links={[]}
                        />
                        <Dropdown title="Resources" onClick={() => {
                            window.location.href = "/#faq"
                        }} links={[
                            {
                                title: "FAQ",
                                onClick: () => {
                                    window.location.href = "/#faq"
                                }
                            },
                            {
                                title: "Testimonials",
                                onClick: () => {
                                    window.location.href = "/#testimonials"
                                }
                            }
                        ]} />
                        <Dropdown title="Contact" onClick={() => {
                            window.location.href = "/#contact"
                        }} links={[]}
                        />
                    </div>

                    {/* Mobile Hamburger Menu */}
                    <div className="mobile-nav">
                        <button
                            className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>

                    <div className="spacer"></div>
                    {/* <button className="header-cta-btn">Start Free Trial</button> */}
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="mobile-menu-overlay">
                    <div className="mobile-menu">
                        <div className="mobile-menu-section">
                            <h3>Features</h3>
                            <a onClick={() => {
                                const scrollOffset = window.scrollY == 0 ? 200 : 100;
                                window.location.href = "/#features"
                                window.scrollTo({ top: window.scrollY - scrollOffset, behavior: "instant" });
                                setIsMobileMenuOpen(false);
                            }}>All Features</a>
                            <a onClick={() => {
                                const scrollOffset = window.scrollY == 0 ? 200 : 100;
                                window.location.href = "/#shift-management"
                                window.scrollTo({ top: window.scrollY - scrollOffset, behavior: "instant" });
                                setIsMobileMenuOpen(false);
                            }}>Easy Shift Management</a>
                            <a onClick={() => {
                                const scrollOffset = window.scrollY == 0 ? 200 : 100;
                                window.location.href = "/#syncs-to-google-calendar"
                                window.scrollTo({ top: window.scrollY - scrollOffset, behavior: "instant" });
                                setIsMobileMenuOpen(false);
                            }}>Syncs To Google Calendar</a>
                            <a onClick={() => {
                                const scrollOffset = window.scrollY == 0 ? 200 : 100;
                                window.location.href = "/#conflict-management"
                                window.scrollTo({ top: window.scrollY - scrollOffset, behavior: "instant" });
                                setIsMobileMenuOpen(false);
                            }}>Conflict Management</a>
                            <a onClick={() => {
                                const scrollOffset = window.scrollY == 0 ? 200 : 100;
                                window.location.href = "/#communication"
                                window.scrollTo({ top: window.scrollY - scrollOffset, behavior: "instant" });
                                setIsMobileMenuOpen(false);
                            }}>Seamless Communication</a>
                        </div>

                        <div className="mobile-menu-section">
                            <a onClick={() => {
                                window.location.href = "/#pricing"
                                setIsMobileMenuOpen(false);
                            }}>Pricing</a>
                        </div>

                        <div className="mobile-menu-section">
                            <h3>Resources</h3>
                            <a onClick={() => {
                                window.location.href = "/#faq"
                                setIsMobileMenuOpen(false);
                            }}>FAQ</a>
                            <a onClick={() => {
                                window.location.href = "/#testimonials"
                                setIsMobileMenuOpen(false);
                            }}>Testimonials</a>
                        </div>

                        <div className="mobile-menu-section">
                            <a onClick={() => {
                                window.location.href = "/#contact"
                                setIsMobileMenuOpen(false);
                            }}>Contact</a>
                        </div>
                    </div>
                </div>
            )}
            {/* Spacer to prevent content jump when header becomes sticky */}
            {isSticky && <div style={{ height: '75px' }} />}
        </>
    )
}

export default Header