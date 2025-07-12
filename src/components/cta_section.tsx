import { ArrowRight, Clock, Users, CheckCircle } from 'lucide-react';
import './cta_section.css';

function CTASection() {
    return (
        <div className="cta-section" id="get-started">
            <div className="cta-container">
                <div className="cta-content">
                    <h2>Ready to Transform Your Shift Management?</h2>
                    <p>Join thousands of event professionals who have streamlined their operations with ShiftMate</p>

                    <div className="cta-benefits">
                        <div className="benefit">
                            <Clock size={24} />
                            <span>Save 10+ hours per week</span>
                        </div>
                        <div className="benefit">
                            <Users size={24} />
                            <span>Reduce scheduling conflicts by 90%</span>
                        </div>
                        <div className="benefit">
                            <CheckCircle size={24} />
                            <span>Improve team satisfaction</span>
                        </div>
                    </div>

                    <div className="cta-buttons">
                        <button className="cta-primary">
                            Sign Up!
                            <ArrowRight size={20} />
                        </button>
                        {/* <button className="cta-secondary">
                            Schedule Demo
                        </button> */}
                    </div>


                </div>

                <div className="cta-visual">
                    <div className="floating-card card-1">
                        <div className="card-header">
                            <div className="card-avatar">JD</div>
                            <div>
                                <h4>John Doe</h4>
                                <p>Available</p>
                            </div>
                        </div>
                        <div className="card-content">
                            <p>Weekend Event - Grand Ballroom</p>
                            <span className="shift-time">2:00 PM - 10:00 PM</span>
                        </div>
                    </div>

                    <div className="floating-card card-2">
                        <div className="notification-dot"></div>
                        <div className="card-content">
                            <h4>Shift Swap Request</h4>
                            <p>Sarah wants to swap Saturday shift</p>
                            <div className="card-actions">
                                <button className="approve-btn">Approve</button>
                                <button className="decline-btn">Decline</button>
                            </div>
                        </div>
                    </div>

                    <div className="floating-card card-3">
                        <div className="card-content">
                            <h4>Calendar Sync</h4>
                            <p>✓ Synced with Google Calendar</p>
                            <p>✓ 25 shifts this month</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CTASection;
