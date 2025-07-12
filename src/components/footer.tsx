
import './footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>ShiftMate</h3>
                        <p>Streamlining shift management for event professionals worldwide. Built by employees, for employees.</p>

                    </div>

                    <div className="footer-section">
                        <h4>Product</h4>
                        <ul>
                            <li><a href="#features">Features</a></li>
                            <li><a href="#pricing">Pricing</a></li>
                            {/* <li><a href="#">Mobile App</a></li> */}
                            {/* <li><a href="#">Integrations</a></li> */}
                            {/* <li><a href="#">API</a></li> */}
                        </ul>
                    </div>

                    {/* <div className="footer-section">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Press</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Security</a></li>
                        </ul>
                    </div> */}

                    <div className="footer-section">
                        <h4>Support</h4>
                        <ul>
                            <li><a href="#faq">FAQ</a></li>
                            {/* <li><a href="#">Help Center</a></li> */}
                            <li><a href="#contact">Contact Support</a></li>
                            {/* <li><a href="#">System Status</a></li> */}
                            {/* <li><a href="#">Training</a></li> */}
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Legal</h4>
                        <ul>
                            <li><a href="https://www.termsfeed.com/live/d0389f5e-94e2-423b-85a2-1b21b66bc44c">Privacy Policy</a></li>
                            {/* <li><a href="#">Terms of Service</a></li> */}
                            {/* <li><a href="#">GDPR</a></li> */}
                            {/* <li><a href="#">Cookie Policy</a></li> */}
                        </ul>
                    </div>


                </div>

                <div className="footer-bottom">
                    <div className="footer-bottom-content">
                        <p>&copy; 2025 Nathaniel Kemme Nash. All rights reserved.</p>
                        <div className="footer-bottom-links">
                            <a href="https://www.termsfeed.com/live/d0389f5e-94e2-423b-85a2-1b21b66bc44c">Privacy</a>
                            {/* <a href="#">Terms</a> */}
                            {/* <a href="#">Cookies</a> */}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
