import "./title_section.css";
import Logo from '../assets/logo.png'
import { ArrowRight, Calendar, Users, MessageSquare } from 'lucide-react';

function TitleSection() {
  return (
    <div className='title-section' id="title">
      <div className='title-content'>
        <div className='title-text'>
          <h1>The Future of Shift Management</h1>
          <p className="subtitle">Transform your event staffing with intelligent scheduling, seamless communication, and powerful automation. Join thousands of professionals who've revolutionized their operations.</p>

          {/* <div className="cta-buttons">
            <button className="cta-primary">
              Start Free Trial
              <ArrowRight size={20} />
            </button>
            <button className="cta-secondary">
              Watch Demo
            </button>
          </div> */}

          <div className="trust-indicators">
            {/* <div className="trust-item">
              <strong>5,000+</strong>
              <span>Active Users</span>
            </div> */}
            <div className="trust-item">
              <strong>100%</strong>
              <span>Customer Satisfaction</span>
            </div>
            <div className="trust-item">
              <strong>100+</strong>
              <span>Shifts Managed</span>
            </div>
          </div>
        </div>

        <div className='title-visual'>
          <div className="hero-card main-card">
            <div className="card-header">
              <img src={Logo} alt="" className="logo" />
              <h3>ShiftMate</h3>
            </div>
            <div className="feature-highlights">
              <div className="feature-item">
                <Calendar size={20} />
                <span>Smart Scheduling</span>
              </div>
              <div className="feature-item">
                <Users size={20} />
                <span>Team Management</span>
              </div>
              <div className="feature-item">
                <MessageSquare size={20} />
                <span>Instant Communication</span>
              </div>
            </div>
          </div>

          <div className="floating-elements">
            <div className="floating-card notification">
              <div className="notification-dot"></div>
              <span>New shift available!</span>
            </div>
            <div className="floating-card success">
              <span>✓ Schedule synced</span>
            </div>
            <div className="floating-card message">
              <span>💬 3 new messages</span>
            </div>
            <div className="floating-card calendar">
              <span>📅 Next: 2:00 PM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TitleSection